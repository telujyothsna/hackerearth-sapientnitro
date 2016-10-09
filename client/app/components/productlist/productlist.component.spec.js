'use strict';

describe('Component: productlist', function() {
  // load the component's module
  beforeEach(module('hackerearthSapientnitroApp.productlist'));

  var productlistComponent;

  // Initialize the component and a mock scope
  beforeEach(inject(function($componentController) {
    productlistComponent = $componentController('productlist', {});
  }));

  it('should ...', function() {
    1.should.equal(1);
  });
});
