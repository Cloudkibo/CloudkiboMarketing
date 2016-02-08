'use strict';

describe('Controller: setupmeetingCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudMktApp'));

  var setupmeetingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    setupmeetingCtrl = $controller('setupmeetingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});


