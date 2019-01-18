'use strict';

module.exports = (api, options = {}) => {
  const { browser = false } = options;

  let targets;
  if (!browser) {
    targets = { node: true };
  }

  return {
    plugins: [
      '@babel/plugin-proposal-class-properties',
      '@babel/plugin-proposal-json-strings',
      '@babel/plugin-syntax-dynamic-import',
      '@babel/plugin-syntax-import-meta',
    ],
    presets: [['@babel/env', { targets }]],
  };
};
