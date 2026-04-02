import fs from 'fs';
import postcss from 'postcss';
import path from 'path';

const [,, inputPath, scopeClass] = process.argv;

if (!inputPath || !scopeClass) {
    console.error('Usage: node scripts/scope-css.mjs <file-path> <scope-class>');
    console.error('Example: node scripts/scope-css.mjs app/e2e-testing-guide.css .page-e2e');
    process.exit(1);
}

const resolvedPath = path.resolve(inputPath);

if (!fs.existsSync(resolvedPath)) {
    console.error(`Error: File not found at ${resolvedPath}`);
    process.exit(1);
}

const plugin = () => {
    return {
        postcssPlugin: 'scope-css-plugin',
        Rule(rule) {
            // Ignore rules inside @keyframes
            if (rule.parent && rule.parent.type === 'atrule' && rule.parent.name.includes('keyframes')) return;
            
            rule.selectors = rule.selectors.map(selector => {
                // Do not prefix already prefixed selectors, root, body, html
                if (
                    selector.startsWith(':root') || 
                    selector.startsWith('body') || 
                    selector.startsWith('html') || 
                    selector.startsWith(scopeClass)
                ) {
                    return selector;
                }
                
                // Prefix with the scope class
                return `${scopeClass} ${selector}`;
            });
        }
    };
};
plugin.postcss = true;

const css = fs.readFileSync(resolvedPath, 'utf8');
postcss([plugin]).process(css, { from: resolvedPath, to: resolvedPath })
    .then(result => {
        fs.writeFileSync(resolvedPath, result.css);
        console.log(`Successfully scoped CSS in ${inputPath} with ${scopeClass}`);
    })
    .catch(err => {
        console.error('Error processing CSS:', err);
        process.exit(1);
    });
