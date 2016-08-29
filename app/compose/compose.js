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

function newCtrl ($http, $scope) {
  var vm = this, url, config;

  vm.model = {};
  vm.submit = function() {
    
    if ($scope.newMailForm.$valid) {
      console.log($scope);
      url = 'http://private-8c78d-inboxapi5.apiary-mock.com/new';
      config = {
        headers : {
          'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8;'
        }
      };
                                              
      $http.post(url, vm.model, config)
      .then(
        function(response){
           console.log(ff);
        }, 
        function(response){
         // failure callback
        }
      );
    }
  };
}
