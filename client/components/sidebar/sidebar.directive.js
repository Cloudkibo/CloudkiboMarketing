'use strict';

angular.module('cloudMktApp')
  .directive('sidebar', function () {
    return {
      templateUrl: 'components/sidebar/sidebar.html',
      restrict: 'E',
      controller: 'SidebarCtrl'
    };
  });
