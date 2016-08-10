'use strict';

angular.module('inboxApp.components.email')

.directive('customEmail', function() {
  return {
    templateUrl: 'components/email/email.template.html',
    controller: emailController,
    scope: {
    	email: '='
    },
    controllerAs: 'vm'
  };

  function emailController () {
  	console.log("fdasss");
  }
});
