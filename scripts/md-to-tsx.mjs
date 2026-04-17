import fs from 'fs';
import path from 'path';
import { marked } from 'marked';
import * as cheerio from 'cheerio';

const mdPath = 'istqb-ctfl-at-complete-guide.md';
const tsxPath = 'app/istqb-ctfl-at-complete-guide/page.tsx';

// Ensure directory exists
fs.mkdirSync(path.dirname(tsxPath), { recursive: true });

let md = fs.readFileSync(mdPath, 'utf8');

// Parse markdown to HTML
let html = marked.parse(md);

// Load with cheerio to manipulate DOM
const $ = cheerio.load(html, { decodeEntities: false });

// 1. Wrap the first h1 and following until h2 in hero section
const h1 = $('h1').first();
if (h1.length) {
    const heroContent = $('<div className="hero-content"></div>');
    let current = h1.next();
    
    heroContent.append(h1.clone());
    
    while (current.length && current[0].tagName !== 'h2' && current[0].tagName !== 'hr') {
        const next = current.next();
        if (current[0].tagName === 'blockquote') {
            // Check if it contains specific text like "最終更新"
            const text = current.text();
            current.replaceWith(`<div className="hero-sub">${current.html()}</div>`);
        }
        heroContent.append(current.clone());
        current.remove();
        current = next;
    }
    h1.replaceWith($('<section className="hero" id="top"></section>').append(heroContent));
}

// 2. Manipulate tables
$('table').each((i, el) => {
    $(el).wrap('<div className="table-wrapper"></div>');
    // replace colspan with colSpan etc handled later via regex
});

// 3. Manipulate blockquotes -> callouts
$('blockquote').each((i, el) => {
    $(el).replaceWith(`<div className="callout callout-info">${$(el).html()}</div>`);
});

// 4. Code blocks
$('pre > code').parent().each((i, el) => {
    $(el).attr('className', 'code-block text-sm overflow-x-auto p-4 bg-[var(--color-bg-card)] rounded-[var(--radius-DEFAULT)] border border-[var(--color-border)] my-4 text-[var(--color-text-secondary)]');
});

// 5. Replace <hr>
$('hr').each((i, el) => {
    $(el).replaceWith('<hr className="accent-line" />');
});

// 6. Section Headers (h2, h3)
$('h2').not('.hero h2').each((i, el) => {
    $(el).attr('className', 'section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2');
});
$('h3').each((i, el) => {
    $(el).attr('className', 'text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]');
});
$('h4').each((i, el) => {
    $(el).attr('className', 'text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]');
});

// 7. Lists
$('ul').each((i, el) => {
    $(el).attr('className', 'list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]');
});
$('ol').each((i, el) => {
    $(el).attr('className', 'list-decimal pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]');
});

// Get manipulated HTML
let outHtml = $('body').html();

// JSX Conversions (similar to html-to-tsx.mjs)
outHtml = outHtml.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
outHtml = outHtml.replace(/class=/g, 'className=');
outHtml = outHtml.replace(/classname=/g, 'className=');
outHtml = outHtml.replace(/for=/g, 'htmlFor=');
outHtml = outHtml.replace(/<br>/g, '<br />');
outHtml = outHtml.replace(/<hr([^>]*)>/g, (match, attrs) => {
    return attrs.includes('/') ? match : `<hr${attrs} />`;
});
outHtml = outHtml.replace(/<img>/g, '<img />'); // just in case
outHtml = outHtml.replace(/colspan=/g, 'colSpan=');
outHtml = outHtml.replace(/rowspan=/g, 'rowSpan=');

// Fix unclosed tags for valid JSX
// Input tags (if any)
outHtml = outHtml.replace(/<input([^>]*[^/])>/g, '<input$1 />');

// Remove extra closing tags that cheerio might have added for void elements
// outHtml = outHtml.replace(/<\/br>/g, '').replace(/<\/hr>/g, '').replace(/<\/img>/g, '');

const finalTSX = `import Link from 'next/link';
import Header from '../../components/Header';

export default function ISTQB_CTFL_AT_Guide() {
    return (
        <>
            <Header />
            <main className="container mx-auto px-4 py-8 max-w-5xl">
                ${outHtml}
            </main>
        </>
    );
}
`;

fs.writeFileSync(tsxPath, finalTSX);
console.log('Successfully created page.tsx');
