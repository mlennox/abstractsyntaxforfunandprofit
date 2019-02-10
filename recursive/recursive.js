module.exports = function({ types: t }) {
  return {
    visitor: {
      FunctionDeclaration(path, state) {
        console.log('- - - - - - - - - - - - - -  - - - - - - -\n', path);
        console.log('* * * * * * * * * * * * * * * * * * * * * *\n', state);
      },
      // Identifier(path) {
      //   console.log('= = = = = = = =', path.node);
      // },
    },
  };
};
