const fs = require('fs');
const babel = require('babel-core');

const pluginName = process.argv[2];
const sourceFile = process.argv[3];

// by convention the plugin file is the same name as the folder
const plugin = require(`./${pluginName}/${pluginName}.js`);

fs.readFile(`./${pluginName}/${sourceFile}`, function(error, data) {
  if (error) throw error;

  const source = data.toString();

  const compiled = babel.transform(source, {
    plugins: [plugin],
  });

  console.log(`
  
Source code (./${pluginName}/${sourceFile})
===============
${source}

Compiled code using "${pluginName}" plugin
==============
${compiled.code}

`);
});
