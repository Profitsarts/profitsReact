const fs = require('fs');

const filePath = '/Users/condres/Dev/Profits_portfolio-2026/src/data/projects_v2.js';
let content = fs.readFileSync(filePath, 'utf8');

// I'll swap the IDs for Fobos and Maintenance.
// Maintenance is currently ID 02.
// Fobos is currently ID 03.

// Actually, I'll just rewrite the first few objects manually to be super clean.

const projectsMatch = content.match(/export const projects = \[\s*\{([\s\S]+?)\}\s*,\s*\{([\s\S]+?)\}\s*,\s*\{([\s\S]+?)\}/);
if (projectsMatch) {
    const p1 = projectsMatch[1]; // SoC (01)
    const p2 = projectsMatch[2]; // Maintenance (02)
    const p3 = projectsMatch[3]; // Fobos (03)
    
    // Check if these are the right ones
    if (p2.includes("Maintenance Management") && p3.includes("Fobos")) {
        console.log("Swapping Fobos and Maintenance");
        
        // Swap their IDs and titles in the header part
        // We'll swap indices 2 and 3 in the array essentially.
        
        // Replace full match with swapped content
        const newStart = `export const projects = [\n  {\n${p1}\n  },\n  {\n${p3.replace(/\"id\": \"03\"/, '"id": "02"')}\n  },\n  {\n${p2.replace(/\"id\": \"02\"/, '"id": "03"')}\n  }`;
        content = content.replace(projectsMatch[0], newStart);
    }
}

fs.writeFileSync(filePath, content);
console.log('Swapped Fobos (back to 02) and Maintenance (to 03).');
