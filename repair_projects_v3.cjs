const fs = require('fs');
const path = require('path');

const filePath = '/Users/condres/Dev/Profits_portfolio-2026/src/data/projects_v2.js';
let content = fs.readFileSync(filePath, 'utf8');

// The file looks like:
// export const projects = [{...}, {...}, ... }, }, { ... }];
// We need to fix the extra brace and ensure the export is correct.

// 1. Remove the extra }, at the array break point (line 179)
// Actually, let's just parse the whole thing and re-export to be safe.
// But some of it might not be valid JSON yet.

// Let's find the break point
const lines = content.split('\n');
let fixedLines = [];
let braceCount = 0;
let inArray = false;

for (let i = 0; i < lines.length; i++) {
    let line = lines[i];
    
    // Fix Wordfinder extra spaces or braces if any
    if (i === 178 && line.trim() === '},') {
        // This is the end of Project 08
        fixedLines.push(line);
        continue;
    }
    if (i === 179 && line.trim() === '},') {
        // This is the duplicate brace!
        console.log('Skipping extra brace at line 180');
        continue;
    }
    
    // Fix image paths while we go
    // Replace "assets/img" with "/assets/img"
    line = line.replace(/\"assets\/img/g, '"/assets/img');
    line = line.replace(/src=\\"..\/assets\/img/g, 'src=\\"/assets/img');
    
    fixedLines.push(line);
}

// Ensure it ends with ];
content = fixedLines.join('\n');
if (!content.trim().endsWith('];')) {
    content = content.trim();
    if (content.endsWith('}')) content += ';'; // Wait, array needs ];
    if (!content.endsWith('];')) {
         // Check if it already has ]
         if (!content.endsWith(']')) content += ']';
         if (!content.endsWith('];')) content += ';';
    }
}

fs.writeFileSync(filePath, content);
console.log('Fixed syntax error and thumbnail paths.');
