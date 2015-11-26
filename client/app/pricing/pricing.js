'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pricing', {
        templateUrl: 'app/pricing/pricing.html',
        controller: 'PricingCtrl'
      });
  });
