(function ( legaySharedModule ) {
  'use strict';
  if (typeof module !== 'undefined') {
    module.exports = legaySharedModule();
  } else {
    legaySharedModule();
  }
})( function() {
  'use strict';
  return angular.module('LegacySharedModule', [])
    .controller('LegacySharedCtrl', ['$scope', function ($scope) {
      $scope.message = 'Hi !';
    }])
    .directive('legacy', function () {
      return {
        restrict: 'E',
        controller: 'legacySharedCtrl',
        template: 'I\'m a legacy directive, that can be loaded with or without Webpack, with a message : {{message}}'
      };
    });
});
