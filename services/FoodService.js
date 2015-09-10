'use strict'
var Food = require('./models/Food');

var addFood = function addFood(food, callback) {
	if (!food) {
		return callback(new Error("Food must not empty, it make us hungry."));
	}
	if (!food.name) {
		return callback(new Error("Food should have a name"));
	}
	Food.findOne({
		_id: food._id
	}, function(err, food) {
		if (err) {
			return callback(err);
		}
		if (food) {
			return callback(new Error("This food is existed!"));
		}
	});
	Food.create(food, callback);
}

var getFoodById = function getFoodById(id, callback) {
	Food.findOne({
		_id: id
	}, function(err, food) {
		if (err) {
			return callback(err);
		}
		callback(null, food);
	});
}

var getAllFood = function getAllFood(callback) {
	Food.find({}, function(err, food) {
		if (err) {
			return callback(err);
		}
		callback(null, food);
	});
}

var editFood = function editFood(id, data, callback) {
	Food.findOneAndUpdate({
		_id: id
	}, {
		name: data.name,
		location: {
			lat: data.location.lat,
			lng: data.location.lng,
			name: data.location.name
		},
		image: data.image,
		rating: data.rating
	}, function(err, food) {
		if (err) {
			return callback(err);
		}
		callback(null, food);
	});
}

var deleteFood = function deleteFood(id, callback) {
	Food.findOne({
		_id: id
	}, function(err, food) {
		if (err) {
			return callback(err);
		}
		food.remove(callback);
	});
}

module.exports = {
	addFood: addFood,
	getFoodById: getFoodById,
	getAllFood: getAllFood,
	editFood: editFood,
	deleteFood: deleteFood
}