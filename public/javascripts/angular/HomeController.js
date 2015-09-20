angular.module('randomize', [])
	.controller('FoodController', ['$upload'], function() {
		var food = this;
		food.input = '';
		food.list = [];
		food.addFood = function() {
			food.list.push({
				name: food.input
			});
			console.log(food.list);
			food.input = '';
		};
	});