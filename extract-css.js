const fs = require('fs');
const path = require('path');

const sourceDir = '/home/user/webapp/extracted';
const jsonFiles = fs.readdirSync(sourceDir).filter(f => f.endsWith('.json'));

let allCssRules = [];

jsonFiles.forEach(file => {
  const data = JSON.parse(fs.readFileSync(path.join(sourceDir, file), 'utf8'));
  if (data.css && data.css.inline_rules) {
    allCssRules = allCssRules.concat(data.css.inline_rules);
  }
});

// 중복 제거
const uniqueRules = [...new Set(allCssRules)];

// CSS 파일 생성
const cssContent = uniqueRules.join('\n\n');
fs.writeFileSync('public/css/extracted.css', cssContent);

console.log(`Extracted ${uniqueRules.length} unique CSS rules`);
