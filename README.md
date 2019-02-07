# Abstract Syntax Tree (AST) experiments - neither fun, nor profitable!

Well, they are a little fun, probably only profitable in the right circumstances.

## Pre-requisites

I used node 10.15.1 - you probably should too. All you need then is to `npm install` and you're away to the races

# What's happening here

This repo contains demo code for an article on Abstract Syntax Trees : https://www.webpusher.ie

The code demonstrates examples of manipulating Abstract Syntax Trees (AST) using the `babel` javascript compiler.

## Examples

There are a few examples included

- var to const

To run each example, use the provided `compile.js` file which loads the source file, the specified plugin and prints the resulting transpiled code to the console.

For example, to run the `varToConst` transform use the command below. The convention is that the plugin name will match the folder name, and the compiler will assume the source files are in the same folder.

```bash
node compile.js varToConst vars.source.js
```

Which will produce the following result

```text
Source code (./varToConst/vars.source.js)
===============
// this 'var' should be replaced with a 'const'
var itemOne = ['items', 'things', 'gizmos', 'widgets'];

// this will stay a 'let'
let itemTwo = ['tchotchke', 'stuff', 'yokes'];

Compiled code using "./varToConst/varToConst.js" plugin
==============
// this 'var' should be replaced with a 'const'
const itemOne = ['items', 'things', 'gizmos', 'widgets'];

// this will stay a 'let'
let itemTwo = ['tchotchke', 'stuff', 'yokes'];
```

Notice the `var` has been updated to a `const`