'use strict';

const methods = require('./methods');

/**
 * Mock mongoose model instance.
 * @param {object} obj - Properties to assign to the object.
 * @class
 */
const Model = function (obj) {
  Object.assign(this, obj);
};

methods.forEach(method => {
    Model[method] = function() {
        return this;
    };
});

module.exports = Model;
