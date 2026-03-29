import fs from 'fs';
import path from 'path';

// Usage: node scripts/html-to-tsx.mjs <input.html> <page-name>
// Example: node scripts/html-to-tsx.mjs integration-functional-testing-guide.html integration-functional-testing-guide

const args = process.argv.slice(2);
if (args.length < 2) {
    console.error("Usage: node scripts/html-to-tsx.mjs <input.html> <page-name>");
    process.exit(1);
}

const inputPath = args[0];
const pageName = args[1];

let html;
try {
    html = fs.readFileSync(inputPath, 'utf8');
} catch (error) {
    console.error(`Error reading file ${inputPath}: ${error.message}`);
    process.exit(1);
}

const mainMatch = html.match(/<main>([\s\S]*?)<\/main>/);
let mainContent = mainMatch ? mainMatch[1] : '';

// 1. Extract <pre> blocks to preserve them as raw HTML
const preBlocks = [];
mainContent = mainContent.replace(/<pre>([\s\S]*?)<\/pre>/g, (match, content) => {
    preBlocks.push(content);
    return `___PRE_BLOCK_${preBlocks.length - 1}___`;
});

// Escape { and }
mainContent = mainContent.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');

// JSX conversions
mainContent = mainContent.replace(/class=/g, 'className=');
mainContent = mainContent.replace(/for=/g, 'htmlFor=');
mainContent = mainContent.replace(/<!--/g, '{/*');
mainContent = mainContent.replace(/-->/g, '*/}');
mainContent = mainContent.replace(/<br>/g, '<br />');
mainContent = mainContent.replace(/<hr>/g, '<hr />');
mainContent = mainContent.replace(/<hr className="div">/g, '<hr className="divider" />');

// Replace specific class names
mainContent = mainContent.replace(/className="sh"/g, 'className="section-header"');
mainContent = mainContent.replace(/className="sh-num"/g, 'className="section-num"');
mainContent = mainContent.replace(/className="accent-rule"/g, 'className="accent-line"');
mainContent = mainContent.replace(/className="tw"/g, 'className="table-wrapper"');
mainContent = mainContent.replace(/className="tw mt/g, 'className="table-wrapper mt');
mainContent = mainContent.replace(/className="stat-pill"/g, 'className="stat"');
mainContent = mainContent.replace(/className="stat-v"/g, 'className="stat-num"');
mainContent = mainContent.replace(/className="stat-l"/g, 'className="stat-label"');
mainContent = mainContent.replace(/className="code-hdr"/g, 'className="code-header"');
mainContent = mainContent.replace(/className="dots"/g, 'className="code-dots"');
mainContent = mainContent.replace(/className="step-n"/g, 'className="step-num-circle"');
mainContent = mainContent.replace(/className="step-body"/g, 'className="step-content"');

// Replace badges
mainContent = mainContent.replace(/b-sky/g, 'badge-int');
mainContent = mainContent.replace(/b-teal/g, 'badge-int');
mainContent = mainContent.replace(/b-amber/g, 'badge-e2e');
mainContent = mainContent.replace(/b-red/g, 'badge-sec');
mainContent = mainContent.replace(/b-green/g, 'bg-accent-green\\/10 text-\\[var\\(--color-accent-green\\)\\] border-\\[rgba\\(104\\,211\\,145\\,0\\.3\\)\\]'); 
mainContent = mainContent.replace(/b-violet/g, 'badge-func');
mainContent = mainContent.replace(/b-slate/g, 'badge-unit');

// Callouts
mainContent = mainContent.replace(/c-sky/g, 'callout-info');
mainContent = mainContent.replace(/c-amber/g, 'callout-warn');
mainContent = mainContent.replace(/c-red/g, 'callout-danger');
mainContent = mainContent.replace(/c-green/g, 'callout-good');
mainContent = mainContent.replace(/c-teal/g, 'callout-info');
mainContent = mainContent.replace(/c-violet/g, 'callout-info');

mainContent = mainContent.replace(/className="g2"/g, 'className="grid-2"');
mainContent = mainContent.replace(/className="g2 mt/g, 'className="grid-2 mt');
mainContent = mainContent.replace(/className="flex"/g, 'className="flex"');
mainContent = mainContent.replace(/className="flex ia/g, 'className="flex items-center');
mainContent = mainContent.replace(/className="flex ia gap1/g, 'className="flex items-center gap-1');
mainContent = mainContent.replace(/className="flex ia gap1 mt1/g, 'className="flex items-center gap-1 mt-1');
mainContent = mainContent.replace(/ gap1/g, ' gap-1');
mainContent = mainContent.replace(/ gap2/g, ' gap-2');
mainContent = mainContent.replace(/ mt1/g, ' mt-1');
mainContent = mainContent.replace(/ mt2/g, ' mt-2');
mainContent = mainContent.replace(/ mt3/g, ' mt-3');
mainContent = mainContent.replace(/ mt4/g, ' mt-4');

const varMap = {
    '--navy': 'var(--color-bg-primary)',
    '--navy2': 'var(--color-bg-secondary)',
    '--navy3': 'var(--color-bg-card)',
    '--navy4': 'var(--color-bg-card-hover)',
    '--slate': 'var(--color-border)',
    '--wire': 'var(--color-border)',
    '--wire2': 'var(--color-border-bright)',
    '--sky': 'var(--color-accent-blue)',
    '--sky2': 'var(--color-accent-blue)',
    '--sky3': 'var(--color-accent-cyan)',
    '--electric': 'var(--color-accent-cyan)',
    '--teal': 'var(--color-accent-cyan)',
    '--amber': 'var(--color-accent-orange)',
    '--amber2': 'var(--color-accent-yellow)',
    '--red': 'var(--color-accent-red)',
    '--red2': 'var(--color-accent-red)',
    '--green': 'var(--color-accent-green)',
    '--green2': 'var(--color-accent-green)',
    '--violet': 'var(--color-accent-purple)',
    '--text1': 'var(--color-text-primary)',
    '--text2': 'var(--color-text-secondary)',
    '--text3': 'var(--color-text-muted)',
    '--r': 'var(--radius-DEFAULT, 12px)',
    '--r-sm': 'var(--radius-sm, 8px)'
};

for (const [key, value] of Object.entries(varMap)) {
    mainContent = mainContent.replace(new RegExp(`var\\(${key}\\)`, 'g'), value);
}

mainContent = mainContent.replace(/style="([^"]*)"/g, (match, styleString) => {
    const styleObj = {};
    styleString.split(';').forEach(declaration => {
        if (declaration.trim() === '') return;
        const idx = declaration.indexOf(':');
        if (idx === -1) return;
        const property = declaration.slice(0, idx).trim();
        const value = declaration.slice(idx + 1).trim();
        if (property && value) {
            const camelProperty = property.replace(/-([a-z])/g, (g) => g[1].toUpperCase());
            styleObj[camelProperty] = value;
        }
    });
    return `style={{${Object.entries(styleObj).map(([k, v]) => `${k}: "${v}"`).join(', ')}}}`;
});

// Replace old colspan with colSpan
mainContent = mainContent.replace(/colspan="(\d+)"/g, 'colSpan={$1}');

// Restore <pre> blocks using dangerouslySetInnerHTML
mainContent = mainContent.replace(/___PRE_BLOCK_(\d+)___/g, (match, index) => {
    let content = preBlocks[index];
    // escape backticks and ${}
    content = content.replace(/`/g, '\\`').replace(/\$/g, '\\$');
    return `<pre dangerouslySetInnerHTML={{ __html: \`${content}\` }} />`;
});

// Generate Component Name (PascalCase)
const componentName = pageName.split('-').map(part => part.charAt(0).toUpperCase() + part.slice(1)).join('');

const out = `import '../${pageName}.css';

export default function ${componentName}() {
    return (
        <>
            ${mainContent}
        </>
    );
}
`;

const outputDir = path.join('app', pageName);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const outputPath = path.join(outputDir, 'page.tsx');
fs.writeFileSync(outputPath, out);
console.log(`Successfully converted ${inputPath} -> ${outputPath}`);
