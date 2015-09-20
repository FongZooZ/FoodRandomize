angular.module('name', ['ngRoute'])
	.service('NameService', function($http) {
		this.addName = function(name) {
			return $http.post('/api/name', name).success(function(response) {
				// after add done
			});
		}
	})
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		// $routeProvider
		// 	.when('/nameDisplay', {
		// 		controller: 'NameController as NameCtrl'
		// 	});

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}])
	.controller('NameController', function(NameService) {
		var self = this;
		self.addName = function() {
			var nameField = {
				display: self.name.display,
				detail: self.name.detail
			}
			NameService.addName(nameField);
			self.name = {display: '', detail: ''};
			nameField = {display: '', detail: ''};
		}
	});