module.exports = {
  "root": true,
  "env": {
    "browser": true,
    "es6": true,
    "jest/globals": true
  },
  "extends": ["eslint:recommended", "prettier", "plugin:react/recommended"],
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 8,
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "impliedStrict": true,
      "classes": true,
      "jsx": true
    }
  },
  "plugins": [
    "prettier",
    "import",
    "jest",
    "react"
  ],
  "rules": {
    "no-restricted-syntax": [
      "error", {
        "selector": "VariableDeclaration[kind='var']",
        "message": "All variables must be declared as 'const', do not use 'var'"
      },
      "error", {
        "selector": "CallExpression CallExpression MemberExpression Identifier[name='then']",
        "message": "please add a catch"
      }
    ],
    "prettier/prettier": [
      "error",
      {
        "trailingComma": "es5",
        "singleQuote": true,
        "printWidth": 120
      }
    ],
    "complexity": [
      "error",
      5
    ],
    "max-params": ["warn", 4],
    "max-statements": [
      "warn",
      7
    ],
    "max-statements-per-line": [
      "warn",
      {
        "max": 1
      }
    ],
    "max-nested-callbacks": [
      "error",
      2
    ],
    "max-depth": [
      "warn",
      {
        "max": 2
      }
    ],
    "max-lines": [
      "warn",
      5
    ],
    "eqeqeq": [
      "error",
      "smart"
    ],
    "prefer-const": "warn",
    // "no-var": "error"
  },

};