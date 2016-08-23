'use strict';

angular.module('inboxApp.inbox', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inbox', {
    templateUrl: 'inbox/inbox.html',
    controller: 'inboxCtrl',
    controllerAs: 'vm'
  });
}])

.controller('inboxCtrl', inboxCtrl);

function inboxCtrl ($http) {
	var vm = this;

	vm.inboxMails = {};

	$http({
  method: 'GET',
  url: 'http://private-8c78d-inboxapi5.apiary-mock.com/inbox'
}).then(function successCallback(response) {
	if(!response) {
		return;
	}

	vm.inboxMails = response.data;
  }, function errorCallback(response) {
    vm.error = response.error;
  });
}
