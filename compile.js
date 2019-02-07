const fs = require('fs');
const babel = require('babel-core');

const pluginFile = process.argv[2];
const sourceFile = process.argv[3];

console.log(`plugin "${pluginFile}"`);
console.log(`source "${sourceFile}"`);

const plugin = require(pluginFile);

fs.readFile(sourceFile, function(error, data) {
  if (error) throw error;

  const source = data.toString();

  const compiled = babel.transform(source, {
    plugins: [plugin],
  });

  console.log(compiled.code);
});
