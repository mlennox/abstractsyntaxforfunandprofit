module.exports = function({ types: t }) {
  return {
    visitor: {
      CallExpression(path) {
        // const axioses = path.node
        console.log('CallExpression - - - - - - - - - - - - - -', path.node);
      },
      MemberExpression(path) {
        if (path.node.object && path.node.object.name === 'axios') {
          console.log('MemberExpression - - - - - - - - - - - - - -', path.node);
        }
      },
    },
  };
};
