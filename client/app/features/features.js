'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/features', {
        templateUrl: 'app/features/features.html',
        controller: 'FeaturesCtrl'
      });
  });
