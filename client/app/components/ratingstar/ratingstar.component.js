'use strict';
const angular = require('angular');

export class ratingstarComponent {
  /*@ngInject*/
  constructor($scope) {
    $scope.width = parseFloat(this.rating)*100/5;
  }
}

export default angular.module('hackerearthSapientnitroApp.ratingstar', [])
  .component('ratingstar', {
    template: require('./ratingstar.html'),
    bindings: {
      rating: '='
    },
    controller: ratingstarComponent,
    controllerAs: 'ctrl'
  })
  .name;
