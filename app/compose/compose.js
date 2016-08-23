'use strict';

angular.module('inboxApp.compose', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/new', {
    templateUrl: 'compose/compose.html',
    controller: 'newCtrl',
    controllerAs: 'vm'
  });
}])

.controller('newCtrl', newCtrl);

function newCtrl ($http) {
  var vm = this;

  vm.newMails = {};

  
}
