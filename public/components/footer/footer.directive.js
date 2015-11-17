'use strict';

angular.module('cloudKiboMarketingApp')
  .directive('footer', function () {
    return {
      templateUrl: '/footer',
      restrict: 'E',
      link: function (scope, element) {
        element.addClass('footer');
      }
    };
  });