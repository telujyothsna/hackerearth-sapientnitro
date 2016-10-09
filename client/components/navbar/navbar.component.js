'use strict';
/* eslint no-sync: 0 */

import angular from 'angular';

export class NavbarComponent {  
  
  constructor(){
    
  }

  toggleSidedrawer(){
    console.log(this)    
    this.isSideBarCollapsed = !this.isSideBarCollapsed;
  }
}

export default angular.module('directives.navbar', [])
  .component('navbar', {
    template: require('./navbar.html'),
    controller: NavbarComponent,
    controllerAs: 'ctrl',
    bindings: {
      'isSideBarCollapsed' : '='
    }
  })
  .name;
