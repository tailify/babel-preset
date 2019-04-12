'use strict';

module.exports = (api, options = {}) => {
  const { browser = false, corejs = 3, modules = 'auto', useBuiltIns = 'usage' } = options;

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
    presets: [['@babel/env', { corejs, modules, targets, useBuiltIns }]],
  };
};
