'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blogpage', {
        templateUrl: 'app/blogpage/blogpage.html',
        controller: 'BlogpageCtrl'
      });
  });
