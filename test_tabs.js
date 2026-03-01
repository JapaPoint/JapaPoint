const fs = require('fs');
const jsdom = require("jsdom");
const { JSDOM } = jsdom;

let html = fs.readFileSync('d:/Japapoint/admin.html', 'utf8');
// remove tailwind config script to prevent error
html = html.replace(/<script>\s*tailwind\.config[\s\S]*?<\/script>/, "");

const dom = new JSDOM(html);
const document = dom.window.document;
const window = dom.window;

window.refreshIcons = () => { console.log("Icons refreshed"); };
window.toast = () => { };

eval("window.switchAdminTab = " +
    html.match(/window\.switchAdminTab =([\s\S]*?)window\.refreshIcons\(\);\s*\};/)[1] +
    "window.refreshIcons();\n};"
);

console.log("Testing switchAdminTab('estoque')...");
window.switchAdminTab('estoque');

console.log("pedidos div class:", document.getElementById('view-pedidos').className);
console.log("estoque div class:", document.getElementById('view-estoque').className);
console.log("pedidos tab class:", document.getElementById('tab-pedidos').className);
console.log("estoque tab class:", document.getElementById('tab-estoque').className);
