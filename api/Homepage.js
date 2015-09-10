'use strict'
var FoodService = require('../services/FoodService');

var getHomepage = function getHomepage (req, res) {
	res.render('index', { title: 'Randomize' });
}

var addFood = function addFood(req, res, next) {
	var food = req.body;
	FoodService.addFood(food, function(err, food) {
		if (err) {
			return next(err);
		}
		res.send(200);
	});
}

var getFoodById = function getFoodById(req, res, next) {
	var id = req.params.id;
	if (typeof(id) != typeof(ObjectId)) {
		return next(new Error("Id is not valid."));
	}
	FoodService.getFoodById(id, function(err, food) {
		if (err) {
			return next(err);
		}
		if (food) {
			res.jsonp(food);
		}
	});
}

var getAllFood = function getAllFood(req, res, next) {
	FoodService.getAllFood(function(err, food) {
		if (err) {
			return next(err);
		}
		res.jsonp(food);
	});
}

var editFood = function editFood(req, res, next) {
	var id = req.body.id;
	var data = req.body.food;
	FoodService.editFood(id, data, function(err, food) {
		if (err) {
			return next(err);
		}
		res.send(200);
	});
}

var deleteFood = function deleteFood(req, res, next) {
	var id = req.params.id;
	FoodService.deleteFood(id, function(err) {
		if (err) {
			return next(err);
		}
		res.send(200);
	});
}

module.exports = {
	getHomepage: getHomepage,
	addFood: addFood,
	getFoodById: getFoodById,
	getAllFood: getAllFood,
	editFood: editFood,
	deleteFood: deleteFood
}