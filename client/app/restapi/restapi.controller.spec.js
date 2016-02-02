'use strict';


//Solution overview
describe('Controller: RestapiCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudMktApp'));

  var RestapiCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RestapiCtrl = $controller('RestapiCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
