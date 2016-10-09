'use strict';

describe('Component: ratingstar', function() {
  // load the component's module
  beforeEach(module('hackerearthSapientnitroApp.ratingstar'));

  var ratingstarComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    ratingstarComponent = $componentController('ratingstar', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
