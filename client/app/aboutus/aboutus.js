'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/aboutus', {
        templateUrl: 'app/aboutus/aboutus.html',
        controller: 'AboutusCtrl'
      });
  });
