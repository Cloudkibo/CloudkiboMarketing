'use strict';

angular.module('cloudMktApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/extractmeetinginfo', {
        templateUrl: 'app/extractmeetinginfo/extractmeetinginfo.html',
        controller: 'ExtractmeetingCtrl'
      });
       
  });
