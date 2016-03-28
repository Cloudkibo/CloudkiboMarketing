'use strict';

describe('Controller: setupwebhookCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudMktApp'));

  var setupwebhookCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    setupwebhookCtrl = $controller('setupwebhookCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});


