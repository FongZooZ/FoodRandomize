'use strict'
var Name = require('./models/Name');

var addName = function addName(name, callback) {
	if (!name) {
		return callback(new Error('Name is null'));
	}
	if (!name.display) {
		return callback(new Error('Name display is null'));
	}
	Name.create(name, callback);
}

var getNameById = function getNameById(id, callback) {
	if (!id) {
		return callback(new Error('Id is null'));
	}
	Name.findOne({
		_id: id
	}, function(err, name) {
		if (err) {
			return callback(err);
		}
		callback(null, name);
	});
}

var getAllName = function getAllName(callback) {
	Name.find({}, function(err, name) {
		if (err) {
			return callback(err);
		}
		callback(null, name);
	});
}

var editName = function editName(id, data, callback) {
	Name.findOneAndUpdate({
		_id: id
	}, {
		display: data.display,
		detail: data.detail
	}, function(err, name) {
		if (err) {
			return callback(err);
		}
		callback(null, name);
	});
}

var deleteName = function deleteName(id, callback) {
	Name.findOne({
		_id: id
	}, function(err, name) {
		if (err) {
			return callback(err);
		}
		name.remove(callback);
	});
}

module.exports = {
	addName: addName,
	getNameById: getNameById,
	getAllName: getAllName,
	editName: editName,
	deleteName: deleteName
}