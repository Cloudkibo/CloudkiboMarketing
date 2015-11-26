'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blogpage', {
        templateUrl: 'app/blogpage/blogpage.html',
        controller: 'BlogpageCtrl'
      });
  });
