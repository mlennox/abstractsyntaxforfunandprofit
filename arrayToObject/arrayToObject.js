module.exports = function({ types: t }) {
  const replaceArrayWithObject = path => {
    // ArrayExpression has a property 'elements' that contains the array elements
    const objectProps = path.node.elements.map((element, index) => {
      return new t.objectProperty(new t.stringLiteral(`${index}`), element);
    });

    path.replaceWith(new t.objectExpression(objectProps));
  };

  return {
    visitor: {
      ArrayExpression(path) {
        replaceArrayWithObject(path);
      },
    },
  };
};
