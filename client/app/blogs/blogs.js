'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blogs', {
        templateUrl: 'app/blogs/blogs.html',
        controller: 'BlogsCtrl'
      });
  });
