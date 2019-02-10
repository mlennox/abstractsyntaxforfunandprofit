module.exports = function({ types: t }) {
  return {
    visitor: {
      VariableDeclaration(path) {
        if (path.node.kind === 'var') {
          path.node.kind = 'const';
        }
      },
    },
  };
};
