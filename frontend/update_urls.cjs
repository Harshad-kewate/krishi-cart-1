const fs = require('fs');
const path = require('path');

const dir = 'c:/Users/kewat/Documents/Krishi cart/Krishi-Cart/frontend/src/pages';
const files = fs.readdirSync(dir).filter(f => f.endsWith('.jsx'));

files.forEach(file => {
    const filePath = path.join(dir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    if (content.includes('http://localhost:5000')) {
        content = "import { API_URL } from '../config';\n" + content;
        content = content.replace(/'http:\/\/localhost:5000([^']*)'/g, '`${API_URL}$1`');
        content = content.replace(/`http:\/\/localhost:5000([^`]*)`/g, '`${API_URL}$1`');
        fs.writeFileSync(filePath, content);
        console.log(`Updated ${file}`);
    }
});
