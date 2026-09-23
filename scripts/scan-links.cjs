const fs = require('fs');
const path = require('path');

function getAllFiles(dir, files = []) {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      getAllFiles(filePath, files);
    } else if (filePath.endsWith('.html')) {
      files.push(filePath);
    }
  });
  return files;
}

const htmlFiles = getAllFiles('dist');
const hrefs = new Set();

htmlFiles.forEach(file => {
  const html = fs.readFileSync(file, 'utf8');
  const matches = html.matchAll(/href=["']([^"']+)["']/g);
  for (const match of matches) {
    const href = match[1];
    if (href.startsWith('/') && !href.startsWith('//')) {
      hrefs.add(href);
    }
  }
});

console.log('--- FOUND INTERNAL LINKS ---');
console.log(Array.from(hrefs));

const broken = [];
Array.from(hrefs).forEach(href => {
  const clean = href.split('#')[0];
  if (!clean) return;
  
  let targetFile = path.join('dist', clean);
  if (clean.endsWith('/')) targetFile = path.join('dist', clean, 'index.html');
  else if (!path.extname(clean)) targetFile = path.join('dist', clean, 'index.html');

  if (!fs.existsSync(targetFile) && !fs.existsSync(path.join('dist', clean))) {
    broken.push(href);
  }
});

console.log('--- LINK AUDIT RESULT ---');
console.log('Total internal links:', hrefs.size);
console.log('Broken internal links:', broken.length);
if (broken.length > 0) {
  console.log('Broken links list:', broken);
}
