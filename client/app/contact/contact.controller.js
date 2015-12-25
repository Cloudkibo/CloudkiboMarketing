'use strict';

angular.module('cloudMktApp')
  .controller('ContactCtrl', function ($scope, $http) {
    $scope.message = 'Hello';

    $scope.giveFeedback = function (){
      $scope.data.subject = 'KiboSupport: Feedback given on CloudKibo Marketing Website';
      $http.post('https://api.cloudkibo.com/feedback', $scope.data)
        .success(function(data){
          $scope.addAlert('success', 'Thank you for your feedback.')
        })
    }

    $scope.alerts = [];

    $scope.addAlert = function(newtype, newMsg) {
      //console.log('Error', newtype, newMsg)
      $scope.alerts.push({type: newtype, msg: newMsg});
    };

    $scope.closeAlert = function(index) {
      $scope.alerts.splice(index, 1);
    };

  });
