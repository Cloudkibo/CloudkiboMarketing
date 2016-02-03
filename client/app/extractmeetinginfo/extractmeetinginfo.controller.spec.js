'use strict';

describe('Controller: ExtractmeetingCtrl', function () {

  // load the controller's module
  beforeEach(module('cloudMktApp'));

  var ExtractmeetingCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ExtractmeetingCtrl = $controller('ExtractmeetingCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});


