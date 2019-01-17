'use strict';

const babel = require('@babel/core');

const source = 'let b = 1; a ** b;';

test('should not contain invalid rules', () => {
  const result = babel.transform(source, {
    babelrc: false,
    presets: [['./lib/index.js']],
    sourceType: 'script',
  });
  expect(result).toBeTruthy();
});

test('should compile targeting the current node version by default', () => {
  const result = babel.transform(source, {
    babelrc: false,
    presets: [['./lib/index.js']],
    sourceType: 'script',
  });
  expect(result.code).toBe('let b = 1;\na ** b;');
});

test('should compile targeting browsers', () => {
  const result = babel.transform(source, {
    babelrc: false,
    presets: [['./lib/index.js', { browser: true }]],
    sourceType: 'script',
  });
  expect(result.code).toBe('var b = 1;\nMath.pow(a, b);');
});
