'use strict';

angular.module('kiboMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/blogs', {
        templateUrl: 'app/blogs/blogs.html',
        controller: 'BlogsCtrl'
      });
  });
