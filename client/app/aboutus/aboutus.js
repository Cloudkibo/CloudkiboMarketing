'use strict';

angular.module('cloudKiboMarketingApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/aboutus', {
        templateUrl: 'app/aboutus/aboutus.html',
        controller: 'AboutusCtrl'
      });
  });
