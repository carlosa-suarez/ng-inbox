'use strict';

angular.module('inboxApp.version', [
  'inboxApp.version.interpolate-filter',
  'inboxApp.version.version-directive'
])

.value('version', '0.1');
