'use strict';

// Declare app level module which depends on views, and components
angular.module('inboxApp', [
  'ngRoute',
  'inboxApp.inbox',
  'inboxApp.sent',
  'inboxApp.compose',
  'inboxApp.version',
  'inboxApp.components'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/inbox'});
}]);
