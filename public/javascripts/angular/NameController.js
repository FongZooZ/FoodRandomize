angular.module('name', ['ngRoute'])
	.service('NameService', function($http, $rootScope) {
		this.addName = function(name) {
			return $http.post('/api/name', name).success(function(response) {
				$rootScope.$broadcast('name-added', response);
			});
		};
		this.getAllName = function() {
			return $http.get('/api/name').success(function(response) {

			});
		};
	})
	.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
		// don't know why it doesn't work
		// $routeProvider
		// 	.when('/nameDisplay', {
		// 		controller: 'NameController as NameCtrl'
		// 	});

		$locationProvider.html5Mode({
			enabled: true,
			requireBase: false
		});
	}])
	.controller('NameController', function($rootScope, NameService) {
		var self = this;
		self.names = [];
		self.init = function() {
			NameService.getAllName().then(function(result) {
				self.names = result.data;
			});
		}
		self.addName = function() {
			var nameField = {
				display: self.name.display,
				detail: self.name.detail
			}
			NameService.addName(nameField);
			self.name = {
				display: '',
				detail: ''
			};
			nameField = {
				display: '',
				detail: ''
			};
		}
		self.updateName = function() {
			NameService.getAllName().then(function(result) {
				self.names = result.data;
			});
		}

		// catch events
		$rootScope.$on('name-added', function(evt, response) {
			self.updateName();
		})
	});