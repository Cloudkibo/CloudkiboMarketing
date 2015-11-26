'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/faq', {
        templateUrl: 'app/faq/faq.html',
        controller: 'FaqCtrl'
      });
  });
