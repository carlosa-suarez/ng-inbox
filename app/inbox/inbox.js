'use strict';

angular.module('inboxApp.inbox', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inbox', {
    templateUrl: 'inbox/inbox.html',
    controller: 'inboxCtrl'
  });
}])

.controller('View1Ctrl', [function() {

}]);

var inbox = {
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
	issue: 'issue', body: 'body', date: '2016/04/23',
}