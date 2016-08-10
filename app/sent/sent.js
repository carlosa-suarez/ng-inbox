'use strict';

angular.module('inboxApp.sent', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/sent', {
    templateUrl: 'sent/sent.html',
    controller: 'sentCtrl'
  });
}])

.controller('sentCtrl', [function() {

}]);