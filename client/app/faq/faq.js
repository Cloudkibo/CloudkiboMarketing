'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/faq', {
        templateUrl: 'app/faq/faq.html',
        controller: 'FaqCtrl'
      });
  });
