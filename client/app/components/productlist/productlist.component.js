'use strict';
const angular = require('angular');

export class productlistComponent {
  
  /*@ngInject*/
  constructor($scope) {
    const self = this;
    $scope.selectedtags = self.selectedtags;
  }

  checkTags(item){
    const tags = item.tags;
    let notmatchedcount = 0;
    let i;
    
    if(tags.length){
      for (i = 0; i < tags.length; i++) {
        notmatchedcount = this.selectedtags[tags[i]].selected ? (notmatchedcount + 1) : notmatchedcount;
      }
    }

    return notmatchedcount;
  }

}

export default angular.module('hackerearthSapientnitroApp.productlist', [])
  .component('productlist', {
    template: require('./productlist.html'),
    bindings: { 
      // message: '<',
      items:'=',
      selectedtags: '='
    },
    controller: productlistComponent,
    controllerAs: 'ctrl'
  })
  .name;
