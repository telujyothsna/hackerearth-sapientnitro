'use strict';
const angular = require('angular');

export class sidedrawerComponent {
  
  /*@ngInject*/
  constructor($scope) {
    
  }

  toggleTags(tag){    
    this.selectedtags[tag].selected = !this.selectedtags[tag].selected;
  }
}

export default angular.module('hackerearthSapientnitroApp.sidedrawer', [])
  .component('sidedrawer', {
    template: require('./sidedrawer.html'),
    bindings: { 
      tags: '=',
      selectedtags: '='
    },
    controller: sidedrawerComponent,
    controllerAs: 'ctrl'
  })
  .name;
