import fs from 'fs';
import path from 'path';

// Usage: node scripts/extract-css.mjs <input.html> <output.css>
// Example: node scripts/extract-css.mjs page.html app/page.css

const args = process.argv.slice(2);
if (args.length < 2) {
    console.error("Usage: node scripts/extract-css.mjs <input.html> <output.css>");
    process.exit(1);
}

const inputPath = args[0];
const outputPath = args[1];

let html;
try {
    html = fs.readFileSync(inputPath, 'utf8');
} catch (error) {
    console.error(`Error reading file ${inputPath}: ${error.message}`);
    process.exit(1);
}

const styleMatch = html.match(/<style\b[^>]*>([\s\S]*?)<\/style>/i);
if (!styleMatch) {
  console.error('No <style> found in the input HTML');
  process.exit(1);
}

let css = styleMatch[1];

// Remove :root definition as variables are mapped to tailwind themes
css = css.replace(/:root\s*\{[\s\S]*?\}/, '');

// Map common CSS variables based on QA_Studies design system
const varMap = {
  'var(--forest)': 'var(--color-bg-primary)',
  'var(--forest2)': 'var(--color-bg-secondary)',
  'var(--forest3)': 'var(--color-bg-card)',
  'var(--forest4)': 'var(--color-bg-card-hover)',
  'var(--moss)': 'var(--color-accent-green)',
  'var(--sage)': 'var(--color-accent-green)',
  'var(--sage2)': 'var(--color-accent-green)',
  'var(--mint)': 'var(--color-accent-green)',
  'var(--mint2)': 'var(--color-accent-green)',
  'var(--gold)': 'var(--color-accent-yellow)',
  'var(--gold2)': 'var(--color-accent-orange)',
  'var(--gold3)': 'var(--color-accent-yellow)',
  'var(--gold4)': 'var(--color-accent-yellow)',
  'var(--gold5)': 'var(--color-accent-yellow)',
  'var(--ivory)': 'var(--color-text-primary)',
  'var(--ivory2)': 'var(--color-text-primary)',
  'var(--warm)': 'var(--color-text-secondary)',
  'var(--muted)': 'var(--color-text-muted)',
  'var(--shadow3)': 'var(--color-bg-primary)',
  'var(--ok)': 'var(--color-accent-green)',
  'var(--warn)': 'var(--color-accent-yellow)',
  'var(--danger)': 'var(--color-accent-red)',
  'var(--info)': 'var(--color-accent-blue)',
  'var(--purple)': 'var(--color-accent-purple)',
  'var(--border)': 'var(--color-border)',
  'var(--border2)': 'var(--color-border-bright)',
  'var(--border3)': 'var(--color-border-bright)',
  'var(--font-display)': 'var(--font-display)',
  'var(--font-body)': 'var(--font-body)',
  'var(--font-mono)': 'var(--font-mono)',
  'var(--r)': 'var(--radius-DEFAULT, 12px)',
  'var(--r-sm)': 'var(--radius-sm, 8px)',
  // Extra specific replacements that might appear in older templates
  'rgba(201, 168, 76, ': 'rgba(246, 173, 85, ', // approximate gold/amber alpha
  // Navy theme mappings
  'var(--navy)': 'var(--color-bg-primary)',
  'var(--navy2)': 'var(--color-bg-secondary)',
  'var(--navy3)': 'var(--color-bg-card)',
  'var(--navy4)': 'var(--color-bg-card-hover)',
  'var(--slate)': 'var(--color-border)',
  'var(--wire)': 'var(--color-border)',
  'var(--wire2)': 'var(--color-border-bright)',
  'var(--sky)': 'var(--color-accent-blue)',
  'var(--sky2)': 'var(--color-accent-blue)',
  'var(--sky3)': 'var(--color-accent-cyan)',
  'var(--electric)': 'var(--color-accent-cyan)',
  'var(--teal)': 'var(--color-accent-cyan)',
  'var(--amber)': 'var(--color-accent-orange)',
  'var(--amber2)': 'var(--color-accent-yellow)',
  'var(--red)': 'var(--color-accent-red)',
  'var(--red2)': 'var(--color-accent-red)',
  'var(--green)': 'var(--color-accent-green)',
  'var(--green2)': 'var(--color-accent-green)',
  'var(--violet)': 'var(--color-accent-purple)',
  'var(--text1)': 'var(--color-text-primary)',
  'var(--text2)': 'var(--color-text-secondary)',
  'var(--text3)': 'var(--color-text-muted)'
};

for (const [key, value] of Object.entries(varMap)) {
  css = css.split(key).join(value);
}

// Rename classes to match html-to-tsx.mjs
const classMap = {
    '\\.sh': '.section-header',
    '\\.sh-num': '.section-num',
    '\\.accent-rule': '.accent-line',
    '\\.tw': '.table-wrapper',
    '\\.stat-pill': '.stat',
    '\\.stat-v': '.stat-num',
    '\\.stat-l': '.stat-label',
    '\\.code-hdr': '.code-header',
    '\\.dots': '.code-dots',
    '\\.step-n': '.step-num-circle',
    '\\.step-body': '.step-content',
    // Badges
    '\\.b-sky': '.badge-int',
    '\\.b-teal': '.badge-int',
    '\\.b-amber': '.badge-e2e',
    '\\.b-red': '.badge-sec',
    '\\.b-green': '.bg-accent-green\\\\/10.text-\\\\[var\\\\(--color-accent-green\\\\)\\\\].border-\\\\[rgba\\\\(104,211,145,0.3\\\\)\\\\]',
    '\\.b-violet': '.badge-func',
    '\\.b-slate': '.badge-unit',
    // Callouts
    '\\.c-sky': '.callout-info',
    '\\.c-amber': '.callout-warn',
    '\\.c-red': '.callout-danger',
    '\\.c-green': '.callout-good',
    '\\.c-teal': '.callout-info',
    '\\.c-violet': '.callout-info',
    // Grids & Flex
    '\\.g2': '.grid-2'
};

for (const [key, value] of Object.entries(classMap)) {
    css = css.replace(new RegExp(`${key}\\\\b`, 'g'), value);
}

// Rename keyframes to kebab-case
css = css.replace(/@keyframes fadeUp/g, '@keyframes fade-up');
css = css.replace(/animation: fadeUp/g, 'animation: fade-up');

// Remove layout specific selectors that are handled by Next.js layout.tsx
css = css.replace(/\*,\s*\*\:\:before,\s*\*\:\:after\s*\{[\s\S]*?\}/, '');
css = css.replace(/html\s*\{[\s\S]*?\}/, '');
css = css.replace(/body\s*\{[\s\S]*?\}/, '');
css = css.replace(/main\s*\{[\s\S]*?\}/, '');

const outputDir = path.dirname(outputPath);
if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

fs.writeFileSync(outputPath, css.trim());
console.log(`CSS extracted from ${inputPath} and saved to ${outputPath}`);
