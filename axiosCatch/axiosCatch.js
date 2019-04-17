module.exports = function({ types: t }) {
  return {
    visitor: {
      ArrayExpression(path) {
        replaceArrayWithObject(path);
      },
    },
  };
};
