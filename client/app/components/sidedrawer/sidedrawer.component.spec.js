'use strict';

describe('Component: sidedrawer', function() {
  // load the component's module
  beforeEach(module('hackerearthSapientnitroApp.sidedrawer'));

  var sidedrawerComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    sidedrawerComponent = $componentController('sidedrawer', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
