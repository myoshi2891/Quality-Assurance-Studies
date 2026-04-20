
import fs from 'fs';

const filePath = process.argv[2];
const content = fs.readFileSync(filePath, 'utf-8');
const lines = content.split('\n');

let inBlock = false;
let blockStartLine = -1;

for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith('```')) {
        if (!inBlock) {
            inBlock = true;
            blockStartLine = i + 1;
            console.log(`Block started at line ${blockStartLine}: ${line}`);
        } else {
            if (line.trim() === '```') {
                inBlock = false;
                console.log(`Block ended at line ${i + 1}`);
            } else {
                console.log(`Warning: Found ${line} at line ${i + 1} while inside a block started at line ${blockStartLine}`);
                // In some parsers, this might be treated as a closing fence if it's just ```lang
                // but usually a closing fence is just ```
                // Let's see how many of these we have.
            }
        }
    }
}

if (inBlock) {
    console.log(`Error: Block started at line ${blockStartLine} is never closed.`);
}
