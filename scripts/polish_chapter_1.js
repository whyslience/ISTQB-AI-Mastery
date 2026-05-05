const fs = require('fs');
const path = require('path');
const file = path.join(__dirname, '../src/content/chapters/chapter-1.md');
let content = fs.readFileSync(file, 'utf-8');

content = content.replace(
  /\"Chúng ta có đang xây dựng đúng sản phẩm không\?\"/g,
  '"Chúng ta có đang xây dựng sản phẩm **đúng cách** không?"'
);
content = content.replace(
  /\"Chúng ta có đang xây dựng sản phẩm đúng không\?\"/g,
  '"Chúng ta có đang xây dựng **đúng sản phẩm** không?"'
);

fs.writeFileSync(file, content);
console.log("Chapter 1 Semantic Polish complete!");
