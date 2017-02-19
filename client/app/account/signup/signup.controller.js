'use strict';

angular.module('cloudMktApp')
  .controller('SignupCtrl', function ($scope, $location, $window, $http) {
    $scope.user = {};
    $scope.errors = {};

    $scope.alertsRegister = [];

	$scope.addAlertRegister = function(newtype, newMsg) {
		$scope.alertsRegister.push({type: newtype, msg: newMsg});
	};

	$scope.closeAlertRegister = function(index) {
		$scope.alertsRegister.splice(index, 1);
	};

	$scope.underProgress = function(){
		return $scope.progressState;
	};

    $scope.register = function(form) {
      console.log('registered account with info '+ form);

      $scope.submitted = true;

      $scope.progressState = true;

      $http.post('/api/deployments/save', JSON.stringify($scope.user))
        .success(function(data) {

          $scope.progressState = false;

          console.log('Agent successfully applied for password reset email in Forgot Password Controller');

          $scope.addAlertRegister(data.status, data.msg);
          if(data.status == 'success')
            $scope.sentData = true;
        })
        .error(function(data){
          //console.log('Agent could not apply for password reset email in Forgot Password Controller, '+ JSON.stringify(data));
          $scope.progressState = false;
          $scope.addAlertRegister('danger', 'Server Error, please talk to developer '+ JSON.stringify(data));
        });
    };

    $scope.loginOauth = function(provider) {
      $window.location.href = '/auth/' + provider;
    };
  });
