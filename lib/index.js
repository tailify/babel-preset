'use strict';

module.exports = () => {
  return {
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
    ],
    presets: ['@babel/env'],
  };
};
