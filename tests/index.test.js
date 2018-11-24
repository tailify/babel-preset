'use strict';

const babel = require('@babel/core');

it('should not contain invalid rules', () => {
  const result = babel.transform('let b = 1; a ** b;', {
    babelrc: false,
    presets: ['./lib/index.js'],
    sourceType: 'script',
  });

  expect(result).toBeTruthy();
  expect(result.code).toBe('var b = 1;\nMath.pow(a, b);');
});
