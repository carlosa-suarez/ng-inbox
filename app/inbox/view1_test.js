'use strict';

describe('myApp.view1 module', function() {

  beforeEach(module('inboxApp.inbox'));

  describe('inbox controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var inboxCtrl = $controller('InboxCtrl');
      expect(inboxCtrl).toBeDefined();
    }));

  });
});