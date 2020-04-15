'use strict';

module.exports = {
  extends: ['@tailify/legacy'],
  overrides: [
    {
      extends: ['plugin:jest/recommended', 'plugin:jest/style'],
      files: ['*.test.js'],
    },
  ],
  parserOptions: {
    ecmaVersion: 2015,
  },
  root: true,
};
