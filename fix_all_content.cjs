const fs = require('fs');

const filePath = '/Users/condres/Dev/Profits_portfolio-2026/src/data/projects_v2.js';
const src = fs.readFileSync(filePath, 'utf8');

// The first 3 projects (01, 02, 03) use JSON.stringify'd content with \\n escaping.
// The remaining projects (04+) use simple \"...\" string with \n for newlines.
// The problem: some of the old projects have broken/truncated content strings.
// Strategy: parse the file line by line, identify content fields, and fix them.

const lines = src.split('\n');
const output = [];
let i = 0;
let fixCount = 0;

while (i < lines.length) {
  const line = lines[i];
  
  // Check if this line starts a "content" field  
  const contentMatch = line.match(/^(\s*)"content":\s*"/);
  
  if (contentMatch) {
    const indent = contentMatch[1];
    
    // We need to find where this content string ends properly.
    // A proper content string ends with: "\n"  (quote-newline-quote at the logical end)
    // followed by a line that is just "  }," or "  }"
    
    // First, check if the content string is properly self-contained on this line
    // A proper single-line content ends with: ..."\n"
    // or more precisely, the line should end with "  (closing the string value)
    // and the NEXT line should be "  }," or "  },"
    
    // Collect the full content string - it might span multiple lines if there are real newlines
    let fullContentLine = line;
    let contentEndFound = false;
    let j = i;
    
    // For single-line content fields (the normal case), check if this line
    // properly closes the string and the next line is a proper object close
    // A valid content line ends with: ..." (some form of closing quote)
    // followed by a newline where the next non-empty line is "  }," or similar
    
    // Simple check: does this line end with a proper closing for a JSON string value?
    const trimmed = line.trimEnd();
    
    if (trimmed.endsWith('"')) {
      // Line ends with a quote - check if the next line is a proper object boundary
      const nextLine = (i + 1 < lines.length) ? lines[i + 1].trim() : '';
      if (nextLine === '},' || nextLine === '}') {
        // This content line looks OK
        output.push(line);
        i++;
        continue;
      }
    }
    
    // If we're here, the content string is broken.
    // The content for project Rentr ends with: </div>  {
    // That "{" is actually the start of the next project object.
    // We need to:
    // 1. Find where the HTML content got cut off
    // 2. Close the HTML properly
    // 3. Close the string and object
    // 4. Find where the next valid project starts
    
    console.log(`[FIX] Broken content string detected at line ${i + 1}`);
    fixCount++;
    
    // Extract the content up to the break point
    // For the Rentr case: the line ends with: </div>  {
    // We need to strip the trailing "{" and close properly
    
    // Find the position where valid HTML ends and garbage begins
    // Look for the pattern where the string value is unclosed
    let contentStr = line;
    
    // Check if there's a stray { at the end that's the start of the next object
    const braceIdx = contentStr.lastIndexOf('  {');
    if (braceIdx > 0) {
      // Everything before the stray brace is our content
      contentStr = contentStr.substring(0, braceIdx);
    }
    
    // Now we need to properly close the HTML content.
    // The Rentr content is missing: </div>\n</div>\n"
    // Count open divs to figure out the closing tags needed
    // For simplicity, just append the known missing closing tags
    
    // Check what closing tags are needed by counting opens vs closes
    // Extract just the HTML part (after "content": ")
    const htmlStart = contentStr.indexOf('"content": "') + '"content": "'.length;
    let htmlContent = contentStr.substring(htmlStart);
    
    // Remove trailing quote if present
    if (htmlContent.endsWith('"')) {
      htmlContent = htmlContent.slice(0, -1);
    }
    
    // Unescape to count tags properly
    const unescaped = htmlContent.replace(/\\n/g, '\n').replace(/\\"/g, '"').replace(/\\\\/g, '\\');
    
    // Count unclosed div tags
    const openDivs = (unescaped.match(/<div[\s>]/g) || []).length;
    const closeDivs = (unescaped.match(/<\/div>/g) || []).length;
    const unclosedDivs = openDivs - closeDivs;
    
    console.log(`  Open divs: ${openDivs}, Close divs: ${closeDivs}, Unclosed: ${unclosedDivs}`);
    
    // Build the closing tags
    let closingHtml = '';
    for (let d = 0; d < unclosedDivs; d++) {
      closingHtml += '\\n</div>';
    }
    closingHtml += '\\n';
    
    // Rebuild the line: content string + closing HTML + close quote
    const repairedLine = contentStr + closingHtml + '"';
    output.push(repairedLine);
    
    // Now skip ahead to find the next valid project object or the closing of this one
    i++;
    
    // We need to add the closing "  }," for this project
    // But first, skip any lines that were part of the broken content / next object start
    // The next valid thing should be a line starting with "  {" for the next project
    // or lines like: "id": "08", etc.
    
    // Skip until we find the next project object boundary
    // Look for a line that starts a new project object: /^\s*"id":/
    // But we need to also emit the "  }," closure for the current object first
    
    // Check if lines[i] is already something like:
    // '    "id": "08",'  (which means we consumed the opening { already)
    let foundNextProject = false;
    while (i < lines.length) {
      const currentLine = lines[i].trim();
      
      // If we find a line like "id": "XX", we're inside the next project
      if (currentLine.match(/^"id":\s*"/)) {
        // We need to emit the closure for the broken project and the opening { for this one
        output.push(`${indent.substring(2)}},`);
        output.push(`${indent.substring(2)}{`);
        foundNextProject = true;
        break;
      }
      
      // If we find a duplicate "}," skip it
      if (currentLine === '},') {
        // Check context - if previous output line was also },  skip this duplicate
        const prevOut = output[output.length - 1]?.trim();
        if (prevOut === '},') {
          console.log(`  Skipping duplicate }, at line ${i + 1}`);
          i++;
          continue;
        }
      }
      
      // If this is the opening brace of the next project, just continue
      if (currentLine === '{') {
        // Check if next line has "id"
        const nextL = (i + 1 < lines.length) ? lines[i + 1].trim() : '';
        if (nextL.match(/^"id":\s*"/)) {
          output.push(`${indent.substring(2)}},`);
          output.push(lines[i]); // the {
          i++;
          break;
        }
      }
      
      // Otherwise skip this line (it's garbage from the broken content)
      console.log(`  Skipping line ${i + 1}: ${currentLine.substring(0, 80)}`);
      i++;
    }
    
    continue;
  }
  
  // Check for duplicate }, lines
  if (line.trim() === '},') {
    const prevLine = output[output.length - 1]?.trim();
    if (prevLine === '},') {
      console.log(`[FIX] Removing duplicate }, at line ${i + 1}`);
      fixCount++;
      i++;
      continue;
    }
  }
  
  output.push(line);
  i++;
}

const result = output.join('\n');
fs.writeFileSync(filePath, result);
console.log(`\nDone! Applied ${fixCount} fixes.`);
console.log(`File written: ${filePath}`);

// Verify
const verify = result.replace(/^export const projects_v2 = /, '').replace(/;\s*$/, '');
try {
  const parsed = JSON.parse(verify);
  console.log(`\nVALIDATION: SUCCESS — ${parsed.length} projects parsed correctly.`);
} catch(e) {
  console.log(`\nVALIDATION: STILL BROKEN — ${e.message}`);
  console.log('Will need manual investigation.');
}
