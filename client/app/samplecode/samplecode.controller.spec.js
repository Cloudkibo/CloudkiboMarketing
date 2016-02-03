'use strict';

describe('Controller: SamplecodeCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudMktApp'));

  var SamplecodeCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SamplecodeCtrl = $controller('SamplecodeCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});


