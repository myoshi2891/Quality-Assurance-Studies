
import fs from 'fs';

function fixFences(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const fixedLines = [];
    let inBlock = false;
    let blockStartLine = -1;

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        const trimmedLine = line.trim();

        // Check for indented or messy closing fences
        // If it looks like a closing fence but has spaces or text after it
        // and we ARE in a block.
        if (inBlock && trimmedLine.startsWith('```') && !trimmedLine.match(/^```[a-z0-9]+$/i)) {
             // If it's just ``` with some spaces or weirdness, make it exact
             if (trimmedLine === '```' || trimmedLine.startsWith('``` ')) {
                fixedLines.push('```');
                inBlock = false;
                continue;
             }
        }

        if (line.startsWith('```')) {
            if (inBlock) {
                if (trimmedLine === '```') {
                    inBlock = false;
                } else {
                    // New block starting without closing previous one
                    fixedLines.push('```');
                    fixedLines.push('');
                    inBlock = true;
                    blockStartLine = i + 1;
                }
            } else {
                inBlock = true;
                blockStartLine = i + 1;
            }
        } else if (inBlock) {
            // Check if we hit a heading
            if (line.startsWith('#')) {
                fixedLines.push('```');
                fixedLines.push('');
                inBlock = false;
            }
        }

        fixedLines.push(line);
    }

    if (inBlock) {
        fixedLines.push('```');
    }

    // Secondary pass to fix consecutive empty lines or other minor issues
    const finalContent = fixedLines.join('\n')
        .replace(/\n{3,}/g, '\n\n'); // Max 2 newlines

    fs.writeFileSync(filePath, finalContent);
    console.log(`Fixed fences in ${filePath}`);
}

const args = process.argv.slice(2);
args.forEach(fixFences);
