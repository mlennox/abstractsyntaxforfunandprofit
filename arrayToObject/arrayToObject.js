module.exports = function(babel) {
  const t = babel.types;
  return {
    visitor: {
      ArrayExpression(path) {
        path.node.elements.forEach(element => {
          console.log(element);
        });
      },
    },
  };
};

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
