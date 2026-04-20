
import fs from 'fs';

function fixFences(filePath) {
    const content = fs.readFileSync(filePath, 'utf-8');
    const lines = content.split('\n');
    const fixedLines = [];
    let inBlock = false;
    let blockStartLine = -1;
    let fenceChar = '';

    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];
        
        const fenceMatch = line.match(/^( {0,3})(```+|~~~+)(.*)$/);

        if (fenceMatch) {
            if (inBlock) {
                if (fenceMatch[2][0] === fenceChar[0] && fenceMatch[2].length >= fenceChar.length && fenceMatch[3].trim() === '') {
                    inBlock = false;
                    fenceChar = '';
                } else {
                    // New block starting without closing previous one
                    fixedLines.push(fenceChar);
                    fixedLines.push('');
                    inBlock = true;
                    fenceChar = fenceMatch[2];
                    blockStartLine = i + 1;
                }
            } else {
                inBlock = true;
                fenceChar = fenceMatch[2];
                blockStartLine = i + 1;
            }
        } else if (inBlock) {
            // Check if we hit a heading
            if (line.startsWith('#')) {
                console.warn(`Warning: Code block not closed before header at ${filePath}:${i + 1} - "${line}"`);
            }
        }

        fixedLines.push(line);
    }

    if (inBlock) {
        fixedLines.push(fenceChar || '```');
    }

    // Secondary pass to fix consecutive empty lines or other minor issues
    const finalContent = fixedLines.join('\n')
        .replace(/\n{3,}/g, '\n\n'); // Max 2 newlines

    fs.writeFileSync(filePath, finalContent);
    console.log(`Fixed fences in ${filePath}`);
}

const args = process.argv.slice(2);
args.forEach(fixFences);
