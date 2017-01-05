'use strict';

const expect = require('expect');
const Mockgoose = require('./');

/**
 * standalone
 * mocha lib/index.test.js --watch
 */
describe('Mockgoose', () => {
  describe('methods', () => {
    const methods = [
      'aggregate',
      'count',
      'create',
      'distinct',
      'ensureIndexes',
      'find',
      'findById',
      'findByIdAndRemove',
      'findByIdAndUpdate',
      'findOne',
      'findOneAndRemove',
      'findOneAndUpdate',
      'geoNear',
      'geoSearch',
      'index',
      'mapReduce',
      'plugin',
      'populate',
      'remove',
      'set',
      'update',
      'where',
      'lean',
      'exec',
      'toObject',
      'toString'
    ];
    methods.forEach(x => {
      it(`should have a ${x} method`, () => {
        Mockgoose[x]();
        expect(typeof Mockgoose[x]).toBe('function');
      });
    });
  });
  describe('general', () => {
    it('should be a constructor function', () => {
      const model = new Mockgoose({
        foo: 'bar'
      });
      expect(model instanceof Mockgoose).toBe(true);
      expect(model.foo).toEqual('bar');
    });
  });
});
