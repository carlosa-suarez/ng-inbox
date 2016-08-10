'use strict';

angular.module('inboxApp.inbox', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/inbox', {
    templateUrl: 'inbox/inbox.html',
    controller: 'InboxCtrl',
    controllerAs: 'vm'
  });
}])

.controller('InboxCtrl', inboxCtrl);

function inboxCtrl () {
	this.inboxMails = [
		{issue: 'issue', body: 'body', date: '2016/04/23'},
		{issue: 'issue', body: 'body', date: '2016/04/23'},
		{issue: 'issue', body: 'body', date: '2016/04/23'},
		{issue: 'issue', body: 'body', date: '2016/04/23'},
		{issue: 'issue', body: 'body', date: '2016/04/23'},
		{issue: 'issue', body: 'body', date: '2016/04/23'},
		{issue: 'issue', body: 'body', date: '2016/04/23'},
		{issue: 'issue', body: 'body', date: '2016/04/23'},
		{issue: 'issue', body: 'body', date: '2016/04/23'}
		
	];	
}
