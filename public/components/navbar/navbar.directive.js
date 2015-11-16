'use strict';

angular.module('cloudKiboMarketingApp')
  .directive('navbar', function () {
    return {
      templateUrl: '/navbar',
      restrict: 'E',
      controller: 'NavbarCtrl'
    };
  });
