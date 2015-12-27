'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/thankyou', {
        templateUrl: 'app/thankyou/thankyou.html',
        controller: 'ThankYouCtrl'
      });
  });
