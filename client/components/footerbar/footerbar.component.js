import angular from 'angular';

export class FooterComponent {}

export default angular.module('directives.footerbar', [])
  .component('footerbar', {
    template: require('./footerbar.html'),
    controller: FooterComponent
  })
  .name;
