'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/developers', {
        templateUrl: 'app/developers/developers.html',
        controller: 'DevelopersCtrl'
      });
       
  });
