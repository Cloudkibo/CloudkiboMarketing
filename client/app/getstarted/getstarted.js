'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/getstarted', {
        templateUrl: 'app/getstarted/getstarted.html',
        controller: 'GetStartedCtrl'
      });
       
  });
