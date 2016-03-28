'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/setupwebhook', {
        templateUrl: 'app/setupwebhook/setupwebhook.html',
        controller: 'setupwebhookCtrl'
      });
       
  });
