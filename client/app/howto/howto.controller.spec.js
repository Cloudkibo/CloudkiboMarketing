'use strict';

describe('Controller: howtoCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudMktApp'));

  var howtoCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    howtoCtrl = $controller('howtoCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});


