'use strict';

describe('Component: prodtile', function() {
  // load the component's module
  beforeEach(module('hackerearthSapientnitroApp.prodtile'));

  var prodtileComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    prodtileComponent = $componentController('prodtile', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
