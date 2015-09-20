'use strict'
var NameService = require('../services/NameService');

var getNamePage = function getNamePage(req, res) {
	res.render('name', {
		title: 'Just a normal name!'
	});
}

var addName = function addName(req, res, next) {
	var name = req.body;
	NameService.addName(name, function(err, name) {
		if (err) {
			return next(err);
		}
		res.send(200);
	});
}

var getNameById = function getNameById(req, res, next) {
	var id = req.params.id;
	NameService.getNameById(id, function(err, name) {
		if (err) {
			return next(err);
		}
		res.jsonp(name);
	});
}

var getAllName = function getAllName(req, res, next) {
	NameService.getAllName(function(err, names) {
		if (err) {
			return next(err);
		}
		res.jsonp(names);
	});
}

var editName = function editName(req, res, next) {
	var id = req.params.id;
	var data = {};
	for (prop in req.body) {
		data[prop] = req.body[prop];
	}
	console.log(data);
	NameService.editName(id, data, function(err, name) {
		if (err) {
			return next(err);
		}
		res.send(200);
	});
}

var deleteName = function deleteName(req, res, next) {
	var id = req.params.id;
	NameService.deleteName(id, function(err, name) {
		if (err) {
			return next(err);
		}
		res.send(200);
	});
}

module.exports = {
	getNamePage: getNamePage,
	addName: addName,
	getNameById: getNameById,
	getAllName: getAllName,
	editName: editName,
	deleteName: deleteName
}