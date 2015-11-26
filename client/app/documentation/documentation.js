'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/documentation', {
        templateUrl: 'app/documentation/documentation.html',
        controller: 'DocumentationCtrl'
      });
  });
