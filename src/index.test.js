'use strict';

const Mockgoose = require('.');
const methods = require('./methods');
const assert = require('assert');

/**
 * standalone
 * mocha lib/index.test.js --watch
 */
describe('Mockgoose', () => {
  describe('methods', () => {
    it('should have methods', () => {
      const sanityMethods = ['add', 'find', 'remove'];
      assert.equal(sanityMethods.every(method => methods.indexOf(method) > -1), true);
    });

    methods.forEach(x => {
      it(`should have a ${x} method`, () => {
        Mockgoose[x]();
        assert.equal(typeof Mockgoose[x], 'function');
      });
    });
  });
  describe('general', () => {
    it('should be a constructor function', () => {
      const model = new Mockgoose({
        foo: 'bar'
      });

      assert(model instanceof Mockgoose, true);
      assert(model.foo, 'bar');
    });
  });
});
