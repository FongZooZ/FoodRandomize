angular.module('name', ['ngRoute'])
	.config(function($routeProvider) {
		$routeProvider
		.when('/nameDisplay', {
			controller: 'NameController as NameCtrl'
		})
	})
	.controller('NameController', function() {
		var nameCtrl = this;
		nameCtrl.addName = function() {

		}
	});