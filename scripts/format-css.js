const fs = require('fs');
const path = 'app/istqb-ctal-att-complete-guide/istqb-ctal-att-complete-guide.css';

let css = fs.readFileSync(path, 'utf8');

// 1. Remove dummy headers
css = css.replace(/\/\* ===== CSS CUSTOM PROPERTIES ===== \*\/\n\s*\/\* CSS Custom properties mapped to tailwind themes \*\/\n*/, '');

// 2. Remove 12-space indentation (since it was extracted from HTML block)
css = css.split('\n').map(line => line.startsWith('            ') ? line.substring(12) : line).join('\n');

// 3. Fix .nav-bar positioning
css = css.replace(
    /\.nav-bar {\s*position: sticky;\s*top: 0;\s*z-index: 500;/g,
    '.nav-bar {\n    position: sticky;\n    top: 60px;\n    z-index: 40;'
);

// 4. Add .nav-link.active and .code-line styling
const navLinkActive = `
.nav-link.active {
    color: var(--color-accent-cyan);
    border-bottom-color: var(--color-accent-cyan);
}
`;

const codeLineStyle = `
.code-line {
    white-space: pre;
    font-family: var(--font-mono);
    line-height: 1.7;
}
`;

// Add them after .nav-link hover
css = css.replace(
    /(\.nav-link:hover \{\s*color: var\(--color-accent-cyan\);\s*border-bottom-color: var\(--color-accent-cyan\);\s*\})/,
    `$1\n${navLinkActive}\n${codeLineStyle}`
);

// 5. Add section[id] scroll-margin-top
css = css.replace(
    /(section \{\s*padding: 4rem 0;\s*border-bottom: 1px solid var\(--color-border\);\s*\})/,
    `$1\n\nsection[id] {\n    scroll-margin-top: 80px;\n}`
);

// 6. Scope global rules
// resets
css = css.replace(/\*,\n\s*\*::before,\n\s*\*::after/g, '.istqb-ctal-att *,\n.istqb-ctal-att *::before,\n.istqb-ctal-att *::after');

// body overlays
css = css.replace(/body::before/g, '.istqb-ctal-att::before');
css = css.replace(/body::after/g, '.istqb-ctal-att::after');

// basic tags
css = css.replace(/^section \{/gm, '.istqb-ctal-att section {');
css = css.replace(/^section\[id\] \{/gm, '.istqb-ctal-att section[id] {');
css = css.replace(/^p \{/gm, '.istqb-ctal-att p {');
css = css.replace(/^strong \{/gm, '.istqb-ctal-att strong {');
css = css.replace(/^table \{/gm, '.istqb-ctal-att table {');
css = css.replace(/^th,\s*td \{/gm, '.istqb-ctal-att th,\n.istqb-ctal-att td {');
css = css.replace(/^footer \{/gm, '.istqb-ctal-att footer {');
css = css.replace(/^a \{/gm, '.istqb-ctal-att a {');
css = css.replace(/^ul \{/gm, '.istqb-ctal-att ul {');
css = css.replace(/^ol \{/gm, '.istqb-ctal-att ol {');

// Component scoping - instructions say: "ensure you update every occurrence... update every selector in istqb-ctal-att-complete-guide.css to be descendant selectors of that class"
// To truly scope every selector, we would prefix every class that starts at the beginning of the line.
// E.g., /^(\.[a-zA-Z0-9_-]+)/gm -> .istqb-ctal-att $1
// Wait, we have keyframes and @media queries.
// Let's do a safe targeted regex for classes.
css = css.replace(/^(\.[a-zA-Z0-9_-]+[^{,]*?)\{/gm, '.istqb-ctal-att $1 {');
css = css.replace(/^(\.[a-zA-Z0-9_-]+[^,\n]+),\s*$/gm, '.istqb-ctal-att $1,');

// Specifically handle multiple selectors
css = css.replace(/\.istqb-ctal-att \.istqb-ctal-att/g, '.istqb-ctal-att');

// Remove double empty lines
css = css.replace(/\n{3,}/g, '\n\n');

fs.writeFileSync(path, css, 'utf8');
console.log('CSS processed');