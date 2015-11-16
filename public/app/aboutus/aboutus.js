'use strict';

angular.module('cloudKiboMarketingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/aboutus', {
        templateUrl: '/aboutus',
        controller: 'AboutusCtrl'
      });
  });
