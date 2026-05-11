const { execSync } = require('child_process');

const files = [
  '/Users/condres/Dev/Profits_portfolio-2026/public/assets/img/portfolio/full/01-wordfinder-00-FULL.jpg',
  '/Users/condres/Dev/Profits_portfolio-2026/public/assets/img/portfolio/full/01-wordfinder-00-FULL@2x.jpg'
];

files.forEach(file => {
  try {
    const result = execSync(`mdls -name kMDItemPixelWidth -name kMDItemPixelHeight "${file}"`).toString();
    console.log(`${file}:\n${result}`);
  } catch (e) {
    console.log(`Failed to get metadata for ${file}: ${e.message}`);
  }
});
