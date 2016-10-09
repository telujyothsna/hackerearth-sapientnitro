'use strict';
const angular = require('angular');

export class prodtileComponent {
  /*@ngInject*/
  constructor($scope) {
    $scope.handleTileClick = this.handleTileClick;
  }

  handleTileClick(link){
    window.open(link);
  }
}

export default angular.module('hackerearthSapientnitroApp.prodtile', [])
  .component('prodtile', {
    template: require('./prodtile.html'),
    bindings: { 
      item: '=',
      selectedtags: '='
    },
    controller: prodtileComponent,
    controllerAs: 'ctrl'
  })
  .name;
