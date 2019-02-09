module.exports = function(babel) {
  const t = babel.types;
  return {
    visitor: {
      ArrayExpression(path) {
        const objectProps = [];
        path.node.elements.forEach((element, index) => {
          // console.log(element);
          //key, value, computed, shorthand, decorators
          // const props = new t.objectProperty(new t.stringLiteral(`${index}`), t.stringLiteral(`${element.value}`));
          objectProps.push(
            new t.objectProperty(new t.stringLiteral(`${index}`), new t.stringLiteral(`${element.value}`))
          );
        });

        const objectLiteralFromArray = new t.objectExpression(objectProps);

        path.replaceWith(objectLiteralFromArray);
      },
    },
  };
};

// {
//   "type": "Property",
//     "start": 98,
//       "end": 113,
//         "method": false,
//           "shorthand": false,
//             "computed": false,
//               "key": {
//     "type": "Literal",
//       "start": 98,
//         "end": 101,
//           "value": "0",
//             "raw": "\"0\""
//   },
//   "value": {
//     "type": "Literal",
//       "start": 103,
//         "end": 113,
//           "value": "sixpence",
//             "raw": "\"sixpence\""
//   },
//   "kind": "init"
// },

// Node {
//   type: 'ArrayExpression',
//     start: 121,
//       end: 181,
//         loc:
//   SourceLocation {
//     start: Position { line: 3, column: 14 },
//     end: Position { line: 3, column: 74 }
//   },
//   elements:
//   [Node {
//     type: 'StringLiteral',
//     start: 122,
//     end: 132,
//     loc: [SourceLocation],
//     extra: [Object],
//     value: 'sixpence'
//   },
//     Node {
//       type: 'StringLiteral',
//       start: 134,
//       end: 145,
//       loc: [SourceLocation],
//       extra: [Object],
//       value: 'thrupenny'
//     },
//     Node {
//       type: 'StringLiteral',
//       start: 147,
//       end: 157,
//       loc: [SourceLocation],
//       extra: [Object],
//       value: 'shilling'
//     },
//     Node {
//       type: 'StringLiteral',
//       start: 159,
//       end: 169,
//       loc: [SourceLocation],
//       extra: [Object],
//       value: 'farthing'
//     },
//     Node {
//       type: 'StringLiteral',
//       start: 171,
//       end: 180,
//       loc: [SourceLocation],
//       extra: [Object],
//       value: 'centime'
//     }]
// }
