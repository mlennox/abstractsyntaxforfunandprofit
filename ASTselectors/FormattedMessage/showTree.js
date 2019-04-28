const fs = require('fs');
const babel = require('@babel/parser');

fs.readFile(`./basicReact.js`, function(error, data) {
  const source = data.toString();

  const tree = babel.parse(source, { sourceType: 'module', plugins: ['jsx'] });

  console.log(JSON.stringify(tree));
});
