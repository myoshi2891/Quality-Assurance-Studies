import fs from 'fs';

let content = fs.readFileSync('archive/istqb-ctfl-at-complete-guide.md', 'utf-8');

// Fix 2.1.1
content = content.replace(
    '```\n従来型（ウォーターフォール）とアジャイルの開発・テストサイクルの違い：\n\n```mermaid',
    '従来型（ウォーターフォール）とアジャイルの開発・テストサイクルの違い：\n\n```mermaid'
);
content = content.replace(
    '    class 従来型 waterfall\n    class アジャイル agile\n```\n\n**主な違い（試験頻出！）：**',
    '    class 従来型 waterfall\n    class アジャイル agile\n```\n\n**主な違い（試験頻出！）：**' // Wait, the closing codeblock is missing here too
);

// Let's use a simpler, more robust replacement strategy.
// Remove the backticks before the mermaid blocks, and after the mermaid blocks.

content = content.replace(
    '```\n従来型（ウォーターフォール）とアジャイルの開発・テストサイクルの違い：\n\n```mermaid',
    '従来型（ウォーターフォール）とアジャイルの開発・テストサイクルの違い：\n\n```mermaid'
);
content = content.replace(
    '    class 従来型 waterfall\n    class アジャイル agile\n```\n\n**主な違い（試験頻出！）：**',
    '    class 従来型 waterfall\n    class アジャイル agile\n```\n\n**主な違い（試験頻出！）：**'
);

// We need to fix the fact that the outer block isn't closed.
fs.writeFileSync('archive/istqb-ctfl-at-complete-guide.md', content);
