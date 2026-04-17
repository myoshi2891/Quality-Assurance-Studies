import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import { marked } from 'marked';
import * as cheerio from 'cheerio';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const REPO_ROOT = path.resolve(__dirname, '..');

const mdPath = path.resolve(REPO_ROOT, 'archive/istqb-ctfl-at-complete-guide.md');
const tsxPath = path.resolve(REPO_ROOT, 'app/istqb-ctfl-at-complete-guide/page.tsx');

// Ensure directory exists
fs.mkdirSync(path.dirname(tsxPath), { recursive: true });

let md;
try {
    md = fs.readFileSync(mdPath, 'utf8');
} catch (error) {
    console.error(`Error reading markdown file at ${mdPath}:`, error);
    process.exit(1);
}

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
            const text = current.text();
            if (text.includes('最終更新')) {
                current.replaceWith(`<div className="hero-sub">${current.html()}</div>`);
            }
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
    $(el).find('thead th').attr('scope', 'col');
    $(el).find('tbody th').attr('scope', 'row');
    if (!$(el).find('caption').length && !$(el).attr('aria-label')) {
        $(el).attr('aria-label', 'Data table');
    }
});

// 3. Manipulate blockquotes -> callouts
$('blockquote').each((i, el) => {
    $(el).replaceWith(`<div className="callout callout-info">${$(el).html()}</div>`);
});

// 4. Code blocks
$('pre > code')
    .parent()
    .each((i, el) => {
        $(el).attr(
            'class',
            'code-block text-sm overflow-x-auto p-4 bg-[var(--color-bg-card)] rounded-[var(--radius-DEFAULT)] border border-[var(--color-border)] my-4 text-[var(--color-text-secondary)]',
        );
    });

// 5. Replace <hr>
$('hr').each((i, el) => {
    $(el).replaceWith('<hr className="accent-line" />');
});

// 6. Section Headers (h2, h3)
$('h2')
    .not('.hero h2')
    .each((i, el) => {
        $(el).attr(
            'class',
            'section-header text-2xl mt-12 mb-6 border-b border-[var(--color-border)] pb-2',
        );
    });
$('h3').each((i, el) => {
    $(el).attr('class', 'text-xl font-bold mt-8 mb-4 text-[var(--color-text-primary)]');
});
$('h4').each((i, el) => {
    $(el).attr('class', 'text-lg font-bold mt-6 mb-3 text-[var(--color-text-primary)]');
});

// 7. Lists
$('ul').each((i, el) => {
    $(el).attr('class', 'list-disc pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]');
});
$('ol').each((i, el) => {
    $(el).attr('class', 'list-decimal pl-6 my-4 space-y-2 text-[var(--color-text-secondary)]');
});

// 8. Empty anchors to headers
$('p > a[id]:only-child').each((_, el) => {
    const p = $(el).parent();
    const next = p.next();
    if (next.length && /^h[1-6]$/i.test(next[0].tagName)) {
        next.attr('id', $(el).attr('id'));
        p.remove();
    }
});

// 9. details and summary wrapper
$('details').each((i, el) => {
    $(el).attr(
        'class',
        'p-4 bg-[var(--color-bg-card)] border border-[var(--color-border)] rounded-[var(--radius-DEFAULT)] my-4',
    );
});
$('summary').each((i, el) => {
    $(el).attr('class', 'cursor-pointer font-bold text-[var(--color-accent-blue)]');
});

// Transform attributes for React JSX mapping securely via Cheerio
$('*').each((_, el) => {
    const element = $(el);
    if (el.attribs) {
        if ('class' in el.attribs) {
            const val = el.attribs['class'];
            element.removeAttr('class');
            element.attr('className', val);
        }
        if ('classname' in el.attribs) {
            const val = el.attribs['classname'];
            element.removeAttr('classname');
            element.attr('className', val);
        }
        if ('for' in el.attribs) {
            const val = el.attribs['for'];
            element.removeAttr('for');
            element.attr('htmlFor', val);
        }
        if ('colspan' in el.attribs) {
            const val = el.attribs['colspan'];
            element.removeAttr('colspan');
            element.attr('colSpan', val);
        }
        if ('rowspan' in el.attribs) {
            const val = el.attribs['rowspan'];
            element.removeAttr('rowspan');
            element.attr('rowSpan', val);
        }
    }
});

// Safely escape curly braces in valid text nodes only (do not touch code blocks)
$('*')
    .contents()
    .filter(function () {
        return (
            this.type === 'text' &&
            $(this).parent()[0].tagName !== 'code' &&
            $(this).parent()[0].tagName !== 'pre'
        );
    })
    .each(function () {
        this.data = this.data.replace(/\{/g, '&#123;').replace(/\}/g, '&#125;');
    });

let outHtml = $('body').html();

// Simple fixes:
outHtml = outHtml.replace(/<br>/g, '<br />'); // self close br
// Using a better regex for <input>
outHtml = outHtml.replace(/<input([^>]*)\/?>/g, '<input$1 />'); // self close input
outHtml = outHtml.replace(/<hr([^>]*)>/g, (match, attrs) => {
    return attrs.includes('/') ? match : `<hr${attrs} />`;
});
outHtml = outHtml.replace(/<img>/g, '<img />');

// Convert internal anchors to next/link
let hasLink = false;
outHtml = outHtml.replace(
    /<a([^>]*)href="([^"]+)"([^>]*)>([\s\S]*?)<\/a>/gi,
    (match, before, href, after, content) => {
        if (href.startsWith('#') || href.startsWith('/')) {
            hasLink = true;
            return `<Link${before}href="${href}"${after}>${content}</Link>`;
        }
        return match;
    },
);

const finalTSX = `${hasLink ? "import Link from 'next/link';\n" : ''}import Header from '../../components/Header';

export default function IstqbCtflAtCompleteGuidePage() {
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

try {
    fs.writeFileSync(tsxPath, finalTSX);
    console.log('Successfully created page.tsx');
} catch (error) {
    console.error(`Error writing tsx file at ${tsxPath}:`, error);
    process.exit(1);
}
