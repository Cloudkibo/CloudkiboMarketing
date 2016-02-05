'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/definitions', {
        templateUrl: 'app/definitions/definitions.html',
        controller: 'DefinitionsCtrl'
      });
       
  });
