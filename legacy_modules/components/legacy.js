angular
  .module('LegacyModule', [])
  .controller('LegacyCtrl', ['$scope', function ($scope) {
    $scope.message = 'Hello !';
  }])
  .directive('legacy', function () {
    return {
      restrict: 'E',
      controller: 'legacyCtrl',
      template: 'I\'m a legacy directive with a message : {{message}}'
    };
  });