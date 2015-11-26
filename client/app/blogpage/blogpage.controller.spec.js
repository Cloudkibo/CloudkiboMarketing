'use strict';

describe('Controller: BlogpageCtrl', function () {

  // load the controller's module
  beforeEach(module('kiboMktApp'));

  var BlogpageCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BlogpageCtrl = $controller('BlogpageCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
