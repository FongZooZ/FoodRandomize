var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.ObjectId;

var nameSchema = new Schema({
	display: String,
	detail: String
});

var Name = mongoose.model('name', nameSchema, "name");

module.exports = Name;