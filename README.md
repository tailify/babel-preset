# @tailify/babel-preset

[![Build status][build-status-image]][build-status-url]
[![Greenkeeper][greenkeeper-image]][greenkeeper-url]
[![Version][version-image]][version-url]

> Tailify's very own opinionated Babel preset.

## Installation

```
$ npm install --save-dev @tailify/babel-preset
```

## Usage

To get started, add this to your `.babelrc.js` file:

```js
module.exports = {
  presets: ['@tailify']
};
```

*Note: We can omit the `/babel-preset` suffix since it is automatically assumed by Babel.*

## Options

### `browser`

`boolean`, defaults to `false`.

Targets browsers to compile against instead of the current node version.

### `debug`

`boolean`, defaults to `false`.

Outputs the targets/plugins used and the version specified in [plugin data version](https://github.com/babel/babel/blob/master/packages/babel-preset-env/data/plugins.json) to `console.log`.

[build-status-image]: https://travis-ci.com/tailify/babel-preset.svg?branch=master
[build-status-url]: https://travis-ci.com/tailify/babel-preset

[greenkeeper-image]: https://badges.greenkeeper.io/tailify/babel-preset.svg
[greenkeeper-url]: https://greenkeeper.io

[version-image]: https://img.shields.io/npm/v/@tailify/babel-preset.svg
[version-url]: https://www.npmjs.com/package/@tailify/babel-preset
