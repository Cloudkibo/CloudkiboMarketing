'use strict';


//Solution overview
describe('Controller: SolutionOverviewCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudMktApp'));

  var SolutionOverviewCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    SolutionOverviewCtrl = $controller('SolutionOverviewCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
