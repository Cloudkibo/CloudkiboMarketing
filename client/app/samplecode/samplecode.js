'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/samplecode', {
        templateUrl: 'app/samplecode/samplecode.html',
        controller: 'SamplecodeCtrl'
      });
       
  });
