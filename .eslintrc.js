'use strict';

module.exports = {
  extends: ['@tailify/legacy'],
  overrides: [
    {
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: ['*.test.js'],
      parserOptions: {
        ecmaVersion: 6,
      },
    },
  ],
  root: true,
  env: {
    browser: true,
    node: true,
    commonjs: true,
    es6: true,
  },
};
