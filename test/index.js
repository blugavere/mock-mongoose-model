import assert from 'assert';
import MockMongooseModel from '../lib';

describe('mock-mongoose-model', function () {
  it('should be a constructor!', function () {
    const model = new MockMongooseModel({});
    assert(typeof model === 'object', 'we expected this package author to add actual unit tests.');
  });
});
