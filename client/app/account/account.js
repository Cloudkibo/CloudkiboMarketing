'use strict';

angular.module('cloudMktApp')
  .config( function ($routeProvider) {
    $routeProvider
      .when('/register', {
        templateUrl: 'app/account/signup/signup.html',
        controller: 'SignupCtrl'
      });
  });
