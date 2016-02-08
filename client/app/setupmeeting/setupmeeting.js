'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/setupmeeting', {
        templateUrl: 'app/setupmeeting/setupmeeting.html',
        controller: 'setupmeetingCtrl'
      });
       
  });
