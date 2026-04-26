/* eslint-disable @typescript-eslint/no-require-imports */
const fs = require('fs');
const postcss = require('postcss');
const selectorParser = require('postcss-selector-parser');
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
    `$1\n\nsection[id] {\n    scroll-margin-top: 120px;\n}`
);

// 6. Scope all selectors under .istqb-ctal-att using PostCSS AST walking
function prefixSelector(selectorStr) {
    const transform = selectorParser((selectors) => {
        selectors.each((selector) => {
            const first = selector.first;
            // Skip if already scoped
            if (first && first.type === 'class' && first.value === 'istqb-ctal-att') return;
            // body::before / body::after → scope::pseudo (drop body tag)
            if (first && first.type === 'tag' && first.value === 'body') {
                first.replaceWith(selectorParser.className({ value: 'istqb-ctal-att' }));
                return;
            }
            selector.prepend(selectorParser.combinator({ value: ' ' }));
            selector.prepend(selectorParser.className({ value: 'istqb-ctal-att' }));
        });
    });
    return transform.processSync(selectorStr);
}

const root = postcss.parse(css);
root.walkRules((rule) => {
    // Don't scope @keyframes selectors (from/to/percentages)
    if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name === 'keyframes') return;
    rule.selector = prefixSelector(rule.selector);
});
css = root.toString();

// Remove double empty lines
css = css.replace(/\n{3,}/g, '\n\n');

fs.writeFileSync(path, css, 'utf8');
console.log('CSS processed');