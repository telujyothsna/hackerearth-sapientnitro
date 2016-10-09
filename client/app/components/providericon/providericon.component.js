'use strict';
const angular = require('angular');

export class providericonComponent {
  /*@ngInject*/
  constructor() {

  }
}

export default angular.module('hackerearthSapientnitroApp.providericon', [])
  .component('providericon', {
    template: require('./providericon.html'),
    bindings: {
      name: '='
    },
    controller: providericonComponent,
    controllerAs: 'ctrl'
  })
  .name;