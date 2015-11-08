'use strict';

angular.module('cloudKiboMarketingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/features', {
        templateUrl: 'app/features/features.html',
        controller: 'FeaturesCtrl'
      });
  });
