# mock-mongoose-model [![NPM version][npm-image]][npm-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage percentage][coveralls-image]][coveralls-url]
> Mock mongoose model to use for unit testing.

## Installation

```sh
$ npm install --save mock-mongoose-model
```

## Usage

```js

const assert = require('assert');
const sinon = require('sinon');
const MockMongooseModel = require('mock-mongoose-model');

// stub the mock
sinon.stub(MockMongooseModel, 'findOne').yields(null, { name: 'whiskers' });

// use it somewhere
MockMongooseModel.findOne({ name: 'whiskers' }, (err, doc) => {
  assert(doc.name === whiskers);
});

// for multiple mongoose models, use Object.assign({}, MockMongooseModel);

```

## License

Apache-2.0 © [blugavere](http://benlugavere.com)


[npm-image]: https://badge.fury.io/js/mock-mongoose-model.svg
[npm-url]: https://npmjs.org/package/mock-mongoose-model
[travis-image]: https://travis-ci.org/blugavere/mock-mongoose-model.svg?branch=master
[travis-url]: https://travis-ci.org/blugavere/mock-mongoose-model
[daviddm-image]: https://david-dm.org/blugavere/mock-mongoose-model.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/blugavere/mock-mongoose-model
[coveralls-image]: https://coveralls.io/repos/blugavere/mock-mongoose-model/badge.svg
[coveralls-url]: https://coveralls.io/r/blugavere/mock-mongoose-model
