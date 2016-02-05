'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/howto', {
        templateUrl: 'app/howto/howto.html',
        controller: 'howtoCtrl'
      });
       
  });
