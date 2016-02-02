'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      
       .when('/restapi', {
        templateUrl: 'app/restapi/restapi.html',
        controller: 'RestapiCtrl'
      });
  });
