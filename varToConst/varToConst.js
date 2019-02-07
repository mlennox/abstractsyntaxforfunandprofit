module.exports = function(babel) {
  const t = babel.types;
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
