# ts-node-shebang

[![NPM version](https://img.shields.io/npm/v/@btwiuse/ts-node-shebang.svg?style=flat)](https://npmjs.org/package/@btwiuse/ts-node-shebang)
[![NPM downloads](https://img.shields.io/npm/dm/@btwiuse/ts-node-shebang.svg?style=flat)](https://npmjs.org/package/@btwiuse/ts-node-shebang)

This is a template project that demonstrates how to distribute executable TypeScript snippets on npmjs.org without compilation to JavaScript, thanks to the [ts-node](https://www.npmjs.com/package/ts-node) shebang line:

```
#/usr/bin/env ts-node
```

## How to use

1. fork this project or click [Use this template](https://github.com/btwiuse/ts-node-shebang/generate),
2. replace [`index.ts`](./index.ts) etc. with your own script,
3. and rename this project to something else other than `@btwiuse/ts-node-shebang`,
4. then run `yarn publish` to publish it.

So other people can easily install your script,

```
$ npm install -g ts-node @btwiuse/ts-node-shebang
```

and run it:

```
$ ts-node-shebang
```
