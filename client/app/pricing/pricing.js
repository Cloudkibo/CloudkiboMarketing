'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/pricing', {
        templateUrl: 'app/pricing/pricing.html',
        controller: 'PricingCtrl'
      });
  });
