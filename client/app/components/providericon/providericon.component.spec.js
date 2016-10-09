'use strict';

describe('Component: providericon', function() {
  // load the component's module
  beforeEach(module('hackerearthSapientnitroApp.providericon'));

  var providericonComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    providericonComponent = $componentController('providericon', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
