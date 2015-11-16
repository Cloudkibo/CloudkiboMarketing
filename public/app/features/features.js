'use strict';

angular.module('cloudKiboMarketingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/features', {
        templateUrl: '/features',
        controller: 'FeaturesCtrl'
      });
  });
