'use strict';

angular.module('cloudKiboMarketingApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'ui.bootstrap'
])
  .config(function($routeProvider, $locationProvider) {
    $routeProvider
      .otherwise({
        redirectTo: '/'
      });

    $locationProvider.html5Mode(true);
  })

  .controller('AppController', function($scope) {
    $scope.$on('$viewContentLoaded', function() {
      Metronic.initComponents(); // init core components
      Layout.init();
      //Layout.initOWL();
      RevosliderInit.initRevoSlider();

      //Layout.init(); //  Init entire layout(header, footer, sidebar, etc) on page load if the partials included in server side instead of loading with ng-include directive
    });


  });
