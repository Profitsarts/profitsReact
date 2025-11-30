import fs from 'fs';
import path from 'path';

const worksDir = path.join(process.cwd(), 'profits_jekyll/_works');
const outputDir = path.join(process.cwd(), 'src/data');
const outputFile = path.join(outputDir, 'projects.js');

if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
}

const files = fs.readdirSync(worksDir).filter(file => file.endsWith('.md'));

const projects = files.map(file => {
    const content = fs.readFileSync(path.join(worksDir, file), 'utf-8');
    const frontMatterMatch = content.match(/^---\n([\s\S]*?)\n---/);

    if (!frontMatterMatch) return null;

    const frontMatter = frontMatterMatch[1];
    const lines = frontMatter.split('\n');
    const data = {};

    let currentKey = null;
    let inList = false;

    lines.forEach(line => {
        if (!line.trim()) return;

        // Handle list items
        if (line.trim().startsWith('- ') && inList && currentKey) {
            const value = line.trim().substring(2);
            // Check if it's a complex object in list (like images)
            if (line.includes(':')) {
                // Simple parser for the specific format in these files
                // images:
                //   - name: ...
                //     text: ...
                // This simple parser might fail on complex nested structures but works for simple lists
                // Let's rely on a simpler regex approach for specific fields if needed
            } else {
                if (!Array.isArray(data[currentKey])) data[currentKey] = [];
                data[currentKey].push(value);
            }
            return;
        }

        // Key-value pairs
        const parts = line.split(':');
        if (parts.length >= 2) {
            const key = parts[0].trim();
            const value = parts.slice(1).join(':').trim();

            if (!value) {
                inList = true;
                currentKey = key;
                data[key] = [];
            } else {
                inList = false;
                currentKey = key;
                data[key] = value;
            }
        }
    });

    // Manual cleanup/mapping based on observed file structure
    // The simple parser above is imperfect for nested YAML. 
    // Given the file `01.md` content:
    // tags:
    //   - design
    //   - ux_ui
    // images:
    //   - name: ...
    //     text: ...

    // Let's use a more robust regex for specific fields we care about.

    // Helper to strip inline comments
    const cleanValue = (val) => {
        if (!val) return '';
        return val.split('#')[0].trim();
    };

    const titleMatch = frontMatter.match(/title:\s*(.*)/);
    const title = titleMatch ? cleanValue(titleMatch[1]) : '';

    const previewMatch = frontMatter.match(/preview:\s*(.*)/);
    const preview = previewMatch ? cleanValue(previewMatch[1]) : '';

    const varMatch = frontMatter.match(/var:\s*(.*)/);
    const contentFile = varMatch ? cleanValue(varMatch[1]) : null;

    let contentHtml = '';
    if (contentFile) {
        const contentPath = path.join(process.cwd(), 'profits_jekyll/_includes', contentFile);
        if (fs.existsSync(contentPath)) {
            contentHtml = fs.readFileSync(contentPath, 'utf-8');
        }
    }

    // Tags extraction
    const tags = [];
    const tagsMatch = frontMatter.match(/tags:\s*([\s\S]*?)(?=\n\w+:|$)/);
    if (tagsMatch) {
        const tagLines = tagsMatch[1].split('\n');
        tagLines.forEach(l => {
            const cleanL = cleanValue(l);
            if (cleanL.startsWith('-')) tags.push(cleanL.replace('- ', '').trim());
        });
    }

    // Images extraction
    const images = [];
    const imagesBlockMatch = frontMatter.match(/images:\s*([\s\S]*?)(?=\n\w+:|$)/);
    if (imagesBlockMatch) {
        const imageLines = imagesBlockMatch[1].split('\n');
        let currentImg = {};
        imageLines.forEach(l => {
            const line = cleanValue(l);
            if (line.startsWith('- name:')) {
                if (currentImg.name) images.push(currentImg);
                currentImg = { name: line.replace('- name:', '').trim() };
            } else if (line.startsWith('text:')) {
                currentImg.text = line.replace('text:', '').trim();
            }
        });
        if (currentImg.name) images.push(currentImg);
    }

    return {
        id: file.replace('.md', ''),
        title,
        description: cleanValue(data.p) || '',
        tags,
        thumbnail: preview,
        images,
        imagePath: cleanValue(data.image_path) || '',
        content: contentHtml
    };
}).filter(Boolean);

const fileContent = `export const projects = ${JSON.stringify(projects, null, 2)};`;

fs.writeFileSync(outputFile, fileContent);
console.log(`Migrated ${projects.length} projects to ${outputFile}`);
