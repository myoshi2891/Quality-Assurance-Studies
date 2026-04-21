import fs from 'fs';

const actFile = 'istqb-ct-act-complete-guide.md';
let actContent = fs.readFileSync(actFile, 'utf8');
actContent = actContent.replace(/<a id="(chapter-\d+)"><\/a>\n(## .*?)\n/g, '$2 <a id="$1"></a>\n');
fs.writeFileSync(actFile, actContent);

const ptFile = 'istqb-ct-pt-complete-guide.md';
let ptContent = fs.readFileSync(ptFile, 'utf8');
ptContent = ptContent.replace(/^(>?[ \t]*[-*]|\d+\.)[ \t]{2,}/gm, '$1 ');
fs.writeFileSync(ptFile, ptContent);

console.log('Fixed markdown spacing issues.');