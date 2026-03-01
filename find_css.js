const fs = require('fs');
const idx = fs.readFileSync('d:/Japapoint/index.html', 'utf8');
const adm = fs.readFileSync('d:/Japapoint/admin.html', 'utf8');

console.log('INDEX slide-up:');
idx.split('\n').filter(l => l.includes('slide-up') || l.includes('@keyframes')).forEach(l => console.log(l.trim()));

console.log('ADMIN slide-up:');
adm.split('\n').filter(l => l.includes('slide-up') || l.includes('@keyframes')).forEach(l => console.log(l.trim()));
