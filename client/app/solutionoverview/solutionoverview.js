'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      
       .when('/solutionoverview', {
        templateUrl: 'app/solutionoverview/solutionoverview.html',
        controller: 'SolutionOverviewCtrl'
      });
  });
