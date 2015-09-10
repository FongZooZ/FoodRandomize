'use strict'
var getHomepage = function getHomepage (req, res) {
	res.render('index', { title: 'Randomize' });
}

var addFood = function addFood(req, res) {
	// res.
}

module.exports = {
	getHomepage: getHomepage
}