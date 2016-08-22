'use strict';

angular.module('inboxApp.sent', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sent', {
    templateUrl: 'sent/sent.html',
    controller: 'sentCtrl'
  });
}])

.controller('sentCtrl', sentCtrl);

function sentCtrl (http) {
	var vm = this;

	vm.sentMails = {};

	$http({
  method: 'GET',
  url: 'http://private-8c78d-inboxapi5.apiary-mock.com/sent'
}).then(function successCallback(response) {
	if(!response) {
		return;
	}

	vm.sentMails = response.data;
  }, function errorCallback(response) {
    vm.error = response.error;
  });
}