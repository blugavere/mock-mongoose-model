'use strict';

/**
 * Mock mongoose model instance.
 * @param {object} obj - Properties to assign to the object.
 * @class
 */
const Model = function (obj) {
  Object.assign(this, obj);
};

Model.aggregate = () => {};
Model.count = () => {};
Model.create = () => {};
Model.distinct = () => {};
Model.ensureIndexes = () => {};
Model.find = () => {};
Model.findById = () => {};
Model.findByIdAndRemove = () => {};
Model.findByIdAndUpdate = () => {};
Model.findOne = () => {};
Model.findOneAndRemove = () => {};
Model.findOneAndUpdate = () => {};
Model.geoNear = () => {};
Model.geoSearch = () => {};
Model.index = () => {};
Model.mapReduce = () => {};
Model.lean = () => {};
Model.exec = () => {};
Model.plugin = () => {};
Model.populate = () => {};
Model.remove = () => {};
Model.set = () => {};
Model.update = () => {};
Model.where = () => {};
Model.toObject = () => {};
Model.toString = () => {};

module.exports = Model;
