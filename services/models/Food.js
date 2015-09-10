var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var foodSchema = new Schema({
	name: String,
	location: {
		lat: Number,
		lng: Number,
		name: String
	}
	image: String,
	rating: Number
});

var Food = mongoose.model('food', foodSchema, "food");

module.exports = Food;