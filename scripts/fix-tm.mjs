import fs from 'fs';

// 1. page.test.tsx
let testContent = fs.readFileSync('tests/istqb-ctal-tm-complete-guide/page.test.tsx', 'utf-8');

testContent = testContent.replace(
  "import { describe, it, expect, afterEach } from 'bun:test';",
  "import { describe, it, expect, afterEach, beforeAll, afterAll } from 'bun:test';"
);

testContent = testContent.replace(
  "global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;",
  `let _originalIntersectionObserver: any;

beforeAll(() => {
  _originalIntersectionObserver = global.IntersectionObserver;
  global.IntersectionObserver = MockIntersectionObserver as unknown as typeof IntersectionObserver;
});

afterAll(() => {
  global.IntersectionObserver = _originalIntersectionObserver;
});`
);

testContent = testContent.replace(
  "expect(screen.getByText('製品の管理')).toBeDefined();",
  "expect(screen.getByText(/製品の管理/)).toBeDefined();"
);

testContent = testContent.replace(
  "expect(screen.getByText('チームの管理')).toBeDefined();",
  "expect(screen.getByText(/チームの管理/)).toBeDefined();"
);

fs.writeFileSync('tests/istqb-ctal-tm-complete-guide/page.test.tsx', testContent);

// 2. css
let css = fs.readFileSync('app/istqb-ctal-tm-complete-guide/istqb-ctal-tm-complete-guide.css', 'utf-8');

// Replace *, *::before, *::after
css = css.replace(/\*,\n\s*\*::before,\n\s*\*::after\s*\{/g, '.istqb-ctal-tm-page *,\n            .istqb-ctal-tm-page *::before,\n            .istqb-ctal-tm-page *::after {');

// Replace body::before and body::after
css = css.replace(/body::before\s*\{/g, '.istqb-ctal-tm-page::before {');
css = css.replace(/body::after\s*\{/g, '.istqb-ctal-tm-page::after {');

// Replace typography selectors
css = css.replace(/h1,\n\s*h2,\n\s*h3,\n\s*h4\s*\{/g, '.istqb-ctal-tm-page h1,\n            .istqb-ctal-tm-page h2,\n            .istqb-ctal-tm-page h3,\n            .istqb-ctal-tm-page h4 {');
css = css.replace(/^(\s*)h1\s*\{/gm, '$1.istqb-ctal-tm-page h1 {');
css = css.replace(/^(\s*)h2\s*\{/gm, '$1.istqb-ctal-tm-page h2 {');
css = css.replace(/^(\s*)h3\s*\{/gm, '$1.istqb-ctal-tm-page h3 {');
css = css.replace(/^(\s*)h4\s*\{/gm, '$1.istqb-ctal-tm-page h4 {');
css = css.replace(/^(\s*)p\s*\{/gm, '$1.istqb-ctal-tm-page p {');
css = css.replace(/^(\s*)a\s*\{/gm, '$1.istqb-ctal-tm-page a {');
css = css.replace(/^(\s*)a:hover\s*\{/gm, '$1.istqb-ctal-tm-page a:hover {');
css = css.replace(/^(\s*)ul,\n\s*ol\s*\{/gm, '$1.istqb-ctal-tm-page ul,\n$1.istqb-ctal-tm-page ol {');
css = css.replace(/^(\s*)li\s*\{/gm, '$1.istqb-ctal-tm-page li {');
css = css.replace(/^(\s*)strong\s*\{/gm, '$1.istqb-ctal-tm-page strong {');
css = css.replace(/^(\s*)code\s*\{/gm, '$1.istqb-ctal-tm-page code {');

// Replace table selectors
css = css.replace(/^(\s*)table\s*\{/gm, '$1.istqb-ctal-tm-page table {');
css = css.replace(/^(\s*)thead tr\s*\{/gm, '$1.istqb-ctal-tm-page thead tr {');
css = css.replace(/^(\s*)thead th\s*\{/gm, '$1.istqb-ctal-tm-page thead th {');
css = css.replace(/^(\s*)tbody tr\s*\{/gm, '$1.istqb-ctal-tm-page tbody tr {');
css = css.replace(/^(\s*)tbody tr:hover\s*\{/gm, '$1.istqb-ctal-tm-page tbody tr:hover {');
css = css.replace(/^(\s*)tbody td\s*\{/gm, '$1.istqb-ctal-tm-page tbody td {');
css = css.replace(/^(\s*)tbody td:first-child\s*\{/gm, '$1.istqb-ctal-tm-page tbody td:first-child {');

// Replace footer selectors
css = css.replace(/^(\s*)footer\s*\{/gm, '$1.istqb-ctal-tm-page footer {');
css = css.replace(/^(\s*)footer p\s*\{/gm, '$1.istqb-ctal-tm-page footer p {');

// Sticky nav update
css = css.replace(/\.sticky-nav\s*\{\s*position:\s*sticky;\s*top:\s*0;\s*z-index:\s*1000;/g, '.sticky-nav {\n                position: sticky;\n                top: 60px;\n                z-index: 40;');

fs.writeFileSync('app/istqb-ctal-tm-complete-guide/istqb-ctal-tm-complete-guide.css', css);
