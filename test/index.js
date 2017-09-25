
'use strict';

const assert = require('assert');
const MockMongooseModel = require('..');
const sinon = require('sinon');

// mocha test/index.js --watch
describe('mock-mongoose-model', () => {
  it('should be a constructor!', () => {
    const model = new MockMongooseModel({});
    assert(typeof model === 'object', 'we expected this to be a constructor.');
  });
  it('should be able to be duped', () => {
    const model1 = Object.assign({}, MockMongooseModel);
    const model2 = Object.assign({}, MockMongooseModel);
    assert(model1 !== model2, 'we expected to be able to dupe instances.');
  });
  it('should be able to be stubbed separately through shallow clone', () => {
    const model1 = Object.assign({}, MockMongooseModel);
    const model2 = Object.assign({}, MockMongooseModel);
    sinon.stub(model1);
    sinon.stub(model2);
    model1.findOne();
    assert(model1.findOne.called === true, 'we expected to be able to dupe instances.');
    assert(model2.findOne.called === false);
  });
  it('should allow for chainable methods by only stubbing the final method', () => {
    const model = Object.assign({}, MockMongooseModel);
    sinon.stub(model, 'exec');
    model.find().sort().exec();
    assert(model.exec.called === true);
  });
});
