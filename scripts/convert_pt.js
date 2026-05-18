const fs = require('fs');
const path = require('path');

const inputHtml = fs.readFileSync('istqb-ct-pt-complete-guide.html', 'utf8');

// 1. Extract CSS
let cssMatch = inputHtml.match(/<style>([\s\S]*?)<\/style>/);
let css = cssMatch ? cssMatch[1] : '';

// Map CSS variables
const varMap = {
    '--bg-deep': 'var(--color-bg-primary)',
    '--bg-surface': 'var(--color-bg-secondary)',
    '--bg-card': 'var(--color-bg-card)',
    '--bg-elevated': 'var(--color-bg-card-hover)',
    '--neon-green': 'var(--color-accent-green)',
    '--neon-cyan': 'var(--color-accent-cyan)',
    '--neon-amber': 'var(--color-accent-orange)',
    '--neon-red': 'var(--color-accent-red)',
    '--neon-purple': 'var(--color-accent-purple)',
    '--text-primary': 'var(--color-text-primary)',
    '--text-secondary': 'var(--color-text-secondary)',
    '--text-muted': 'var(--color-text-muted)',
    '--border-dim': 'var(--color-border)',
    '--border-glow': 'var(--color-border-bright)',
    '--font-display': 'var(--font-display)',
    '--font-mono': 'var(--font-mono)',
    '--font-body': 'var(--font-body)',
    '--radius-sm': 'var(--radius-sm, 6px)',
    '--radius-md': 'var(--radius-DEFAULT, 12px)',
    '--radius-lg': 'var(--radius-DEFAULT, 20px)',
    '--transition': '0.25s cubic-bezier(0.4, 0, 0.2, 1)'
};

// Remove :root block but extract any non-variable stuff if existed (only variables exist in :root usually)
css = css.replace(/:root\s*{[\s\S]*?}/, '');

for (const [key, value] of Object.entries(varMap)) {
    css = css.replace(new RegExp(`var\\(${key}\\)`, 'g'), value);
}

// Keyframe renaming
css = css.replace(/@keyframes\s+fadeInDown/g, '@keyframes fade-in-down');
css = css.replace(/animation:\s*fadeInDown/g, 'animation: fade-in-down');
css = css.replace(/@keyframes\s+fadeInUp/g, '@keyframes fade-in-up');
css = css.replace(/animation:\s*fadeInUp/g, 'animation: fade-in-up');
css = css.replace(/@keyframes\s+growBar/g, '@keyframes grow-bar');
css = css.replace(/animation:\s*growBar/g, 'animation: grow-bar');
css = css.replace(/@keyframes\s+scanMove/g, '@keyframes scan-move');
css = css.replace(/animation:\s*scanMove/g, 'animation: scan-move');
css = css.replace(/@keyframes\s+glowPulse/g, '@keyframes glow-pulse');
css = css.replace(/animation:\s*glowPulse/g, 'animation: glow-pulse');
css = css.replace(/@keyframes\s+borderFlow/g, '@keyframes border-flow');
css = css.replace(/animation:\s*borderFlow/g, 'animation: border-flow');

// Fix sticky nav top
css = css.replace(/top:\s*0;/g, 'top: 60px;');

// Write CSS
fs.mkdirSync('app/istqb-ct-pt-complete-guide', { recursive: true });
fs.writeFileSync('app/istqb-ct-pt-complete-guide.css', css);

// 2. Extract Body
let bodyMatch = inputHtml.match(/<body>([\s\S]*?)<\/body>/);
let body = bodyMatch ? bodyMatch[1] : '';

// 3. Extract NavBar
let navMatch = body.match(/<nav class="sticky-nav"[\s\S]*?<\/nav>/);
let navStr = navMatch ? navMatch[0] : '';
body = body.replace(navStr, '<NavBar />');

// Convert HTML to JSX
function htmlToJsx(html) {
    let jsx = html;
    // Convert <pre class="code-block"> to dangerouslySetInnerHTML
    jsx = jsx.replace(/<pre\s+class="code-block"([^>]*)><code>([\s\S]*?)<\/code><\/pre>/g, (match, attrs, codeContent) => {
        // Fix backticks inside codeContent
        const safeContent = codeContent.replace(/`/g, '\\`').replace(/\$/g, '\\$');
        // also keep the original class="code-block" instead of className inside dangerouslySetInnerHTML if there were any, 
        // but here we are on the React element, so we need className for attrs if we replaced it later.
        // It's safer to just do dangerouslySetInnerHTML.
        return `<pre class="code-block"${attrs} dangerouslySetInnerHTML={{ __html: \`${safeContent}\` }}></pre>`;
    });

    // Replace class= with className=
    jsx = jsx.replace(/class="/g, 'className="');
    // Replace for= with htmlFor=
    jsx = jsx.replace(/for="/g, 'htmlFor="');
    // Replace inline styles
    jsx = jsx.replace(/style="([^"]+)"/g, (match, styleStr) => {
        let styleObj = {};
        styleStr.split(';').forEach(rule => {
            if (!rule.trim()) return;
            let [key, val] = rule.split(':');
            if (!key || !val) return;
            key = key.trim().replace(/-([a-z])/g, (m, c) => c.toUpperCase());
            val = val.trim();
            if (val.includes('var(--')) {
                for (const [vKey, vVal] of Object.entries(varMap)) {
                    val = val.replace(new RegExp(`var\\(${vKey}\\)`, 'g'), vVal);
                }
            }
            styleObj[key] = val;
        });
        return `style={{ ${Object.entries(styleObj).map(([k, v]) => `${k}: \`${v}\``).join(', ')} }}`;
    });
    // Self-closing tags
    jsx = jsx.replace(/<br>/g, '<br />');
    jsx = jsx.replace(/<hr>/g, '<hr />');
    jsx = jsx.replace(/<img([^>]*[^/])>/g, '<img$1 />');
    jsx = jsx.replace(/<input([^>]*[^/])>/g, '<input$1 />');
    // HTML Comments
    jsx = jsx.replace(/<!--([\s\S]*?)-->/g, '{/* $1 */}');
    // SVG issues (xmlns:xlink, viewBox etc) - we'll just handle basic things
    // Replace viewBox if lowercase
    jsx = jsx.replace(/viewbox=/g, 'viewBox=');
    jsx = jsx.replace(/stroke-width=/g, 'strokeWidth=');
    jsx = jsx.replace(/stroke-dasharray=/g, 'strokeDasharray=');
    jsx = jsx.replace(/stroke-linejoin=/g, 'strokeLinejoin=');
    jsx = jsx.replace(/font-size=/g, 'fontSize=');
    jsx = jsx.replace(/font-weight=/g, 'fontWeight=');
    jsx = jsx.replace(/font-family=/g, 'fontFamily=');
    jsx = jsx.replace(/text-anchor=/g, 'textAnchor=');
    jsx = jsx.replace(/rowspan=/g, 'rowSpan=');
    jsx = jsx.replace(/marker-end=/g, 'markerEnd=');
    
    // Fix `<span class="klevel">K1 / K2 / K3</span>` inside strings and unescaped entities
    // In React, unescaped `{` or `}` will cause errors, but the HTML doesn't typically have them outside code blocks.
    // If there are code blocks with `{`, they need to be escaped as `{'}'}`.
    // Let's escape raw `{` and `}` in text nodes if necessary, but it's hard with regex. 
    // We will just do a basic replace for { and } if they aren't part of JSX expressions.
    // Actually, `style={{...}}` uses `{`. So we can't globally replace.
    // For now, let's leave it and let the compiler tell us.

    return jsx;
}

const navJsx = htmlToJsx(navStr);
let navContent = `'use client';\n\nexport default function NavBar() {\n    return (\n        ${navJsx}\n    );\n}\n`;
fs.writeFileSync('app/istqb-ct-pt-complete-guide/NavBar.tsx', navContent);

const bodyJsx = htmlToJsx(body);
let pageContent = `import '../istqb-ct-pt-complete-guide.css';\nimport NavBar from './NavBar';\n\nexport default function Page() {\n    return (\n        <>\n${bodyJsx}\n        </>\n    );\n}\n`;

fs.writeFileSync('app/istqb-ct-pt-complete-guide/page.tsx', pageContent);

console.log('Conversion script completed successfully.');
