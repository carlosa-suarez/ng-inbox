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
  var vm = this, url, config;


  vm.model = {};
  vm.submit = function() {
    if (vm.newMailForm.valid) {
      url = 'http://private-8c78d-inboxapi5.apiary-mock.com/new'
      config = {
          headers : {
              'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
          }
      }
                                              
      $http.post(url, vm.model, config)
      .then(
        function(response){
           // success callback
        }, 
        function(response){
         // failure callback
        }
      );
    }
  };
}
