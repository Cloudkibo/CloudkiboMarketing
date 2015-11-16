'use strict';

angular.module('cloudKiboMarketingApp')
  .config(function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: '/main',
        controller: 'MainController',
        controllerAs: 'main'
      });
  });
