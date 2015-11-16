'use strict';

angular.module('cloudKiboMarketingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/contact', {
        templateUrl: '/contact',
        controller: 'ContactCtrl'
      });
  });
