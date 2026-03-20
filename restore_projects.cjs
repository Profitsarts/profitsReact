const fs = require('fs');

function serializeContent(content) {
  return JSON.stringify(content);
}

const socContent = fs.readFileSync('/tmp/soc_content.txt', 'utf8');
const fobosContent = fs.readFileSync('/tmp/fobos_content.txt', 'utf8');
const maintenanceContent = fs.readFileSync('/tmp/maintenance_content.txt', 'utf8');
const projectsRest = fs.readFileSync('/tmp/projects_rest.txt', 'utf8');

const output = `export const projects_v2 = [
  {
    "id": "01",
    "slug": "fms-battery-monitoring",
    "title": "FMS: Battery Monitoring (SoC)",
    "category": "Product Design / IoT / SaaS",
    "client": "Jungheinrich Digital Solutions",
    "date": "2022 - 2023",
    "description": "Architecting a unified IoT battery-monitoring visualization for enterprise fleet management.",
    "thumbnail": "/assets/img/portfolio/thumbnails/01-SoC-THUMB.jpg",
    "featuredImage": "/assets/img/portfolio/full/01-SoC-FULL.jpg",
    "technologies": ["React", "Figma", "Design Systems", "IoT"],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ${serializeContent(socContent)}
  },
  {
    "id": "02",
    "slug": "fobos",
    "title": "Fobos",
    "category": "App Design / Social / Gamification",
    "client": "Personal Project / Client",
    "date": "2021",
    "description": "A complete guide and social platform for Escape Rooms in Spain.",
    "thumbnail": "/assets/img/portfolio/thumbnails/02-Fobos-THUMB.jpg",
    "featuredImage": "/assets/img/portfolio/full/02-Fobos-FULL.jpg",
    "technologies": ["Mobile App", "UI/UX", "User Flow"],
    "imagePath": "/assets/img/portfolio/full/",
    "content": ${serializeContent(fobosContent)}
  },
  {
    "id": "03",
    "slug": "fms-maintenance-management",
    "title": "FMS: Maintenance Management",
    "category": "Product Design / SaaS / B2B",
    "client": "Jungheinrich Digital Solutions",
    "date": "2022 - 2023",
    "description": "Unifying service planning and compliance verification into a high-density calendar workspace.",
    "thumbnail": "/assets/img/portfolio/maintenance/thumb.jpg",
    "featuredImage": "/assets/img/portfolio/maintenance/full.jpg",
    "technologies": ["React", "Figma", "Data Visualization", "User Research"],
    "imagePath": "/assets/img/portfolio/maintenance/",
    "content": ${serializeContent(maintenanceContent)}
  },
${projectsRest}
];`;

fs.writeFileSync('/Users/condres/Dev/Profits_portfolio-2026/src/data/projects_v2.js', output);
console.log('Restoration complete!');
