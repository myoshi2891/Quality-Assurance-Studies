
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
                    // Mismatched inner fence: log warning instead of breaking block
                    console.warn(`Warning: Mismatched inner fence at ${filePath}:${i + 1} - "${line}" inside block started at line ${blockStartLine}`);
                }
            } else {
                inBlock = true;
                fenceChar = fenceMatch[2];
                blockStartLine = i + 1;
            }
        } else if (inBlock) {
            // Check if we hit a heading
            if (/^#{1,6}\s/.test(line)) {
                console.warn(`Warning: Code block not closed before header at ${filePath}:${i + 1} - "${line}"`);
            }
        }

        fixedLines.push(line);
    }

    if (inBlock) {
        if (fixedLines.length > 0 && fixedLines[fixedLines.length - 1].trim() !== '') {
            fixedLines.push('');
        }
        let closingFence = fenceChar;
        if (!closingFence) {
            // Check if there are other fences inside
            const hasFences = fixedLines.slice(blockStartLine - 1).some(l => l.includes('```'));
            if (hasFences) {
                console.warn(`Warning: Unclosed block at ${filePath}:${blockStartLine} with mixed fences, skipping fallback`);
                closingFence = ''; // do not append fallback to avoid gluing errors
            } else {
                closingFence = '```';
            }
        }
        if (closingFence) {
            fixedLines.push(closingFence);
        }
    }

    // Secondary pass to fix consecutive empty lines or other minor issues
    let inCode = false;
    let currentFence = '';
    const finalLines = [];
    let consecutiveNewlines = 0;

    for (let i = 0; i < fixedLines.length; i++) {
        const line = fixedLines[i];
        const fenceMatch = line.match(/^( {0,3})(`{3,}|~{3,})(.*)$/);

        if (fenceMatch) {
            if (!inCode) {
                inCode = true;
                currentFence = fenceMatch[2];
            } else if (fenceMatch[2][0] === currentFence[0] && fenceMatch[2].length >= currentFence.length && fenceMatch[3].trim() === '') {
                inCode = false;
                currentFence = '';
            }
        }

        if (!inCode) {
            if (line.trim() === '') {
                consecutiveNewlines++;
                if (consecutiveNewlines < 2) {
                    finalLines.push(line);
                }
            } else {
                consecutiveNewlines = 0;
                finalLines.push(line);
            }
        } else {
            consecutiveNewlines = 0;
            finalLines.push(line);
        }
    }

    const finalContent = finalLines.join('\n');

    fs.writeFileSync(filePath, finalContent);
    console.log(`Fixed fences in ${filePath}`);
}

const args = process.argv.slice(2);
if (args.length === 0) {
    console.error('Usage: bun scripts/auto-fix-fences-v2.mjs <file...>');
    process.exit(1);
}

args.forEach(filePath => {
    if (!fs.existsSync(filePath)) {
        console.error(`Error: File not found: ${filePath}`);
        process.exit(1);
    }
    fixFences(filePath);
});
