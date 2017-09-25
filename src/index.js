'use strict';

/**
 * Mock mongoose model instance.
 * @param {object} obj - Properties to assign to the object.
 * @class
 */
const Model = function (obj) {
  Object.assign(this, obj);
};

const defaultMethods = [
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
    'lean',
    'exec',
    'plugin',
    'populate',
    'remove',
    'set',
    'update',
    'where',
    'toObject',
    'toString',
    'updateMany',
    'select',
    'add',
    'sort'
];

defaultMethods.forEach(method => {
    Model[method] = function() {
        return this;
    };
});

module.exports = Model;
