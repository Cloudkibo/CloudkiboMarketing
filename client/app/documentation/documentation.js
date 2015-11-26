'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/documentation', {
        templateUrl: 'app/documentation/documentation.html',
        controller: 'DocumentationCtrl'
      });
  });
