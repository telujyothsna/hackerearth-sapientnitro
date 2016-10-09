'use strict';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import routing from './main.routes';

export class MainController {
  deals = [];
  tags = [];
  selectedTags = {};
  /*@ngInject*/
  constructor($http, $scope, socket) {
    this.$http = $http;
    this.socket = socket;
    this.isSideBarCollapsed = false;

    $scope.$on('$destroy', function() {
      // socket.unsyncUpdates('thing');
    });
  }

  $onInit() {
    this.$http.get('https://hackerearth.0x10.info/api/nitro_deals?type=json&query=list_deals')
      .then(response => {        
        
        if(response.status === 200){
          this.deals = response.data.deals;
          this.extractTags(response.data.deals);
        }
      });
    }

  extractTags(deals){
    deals.map( item => {
      this.tags = this.tags.concat(item.tags);
      this.tags = _.uniq(this.tags).sort();
      this.tags.map( i => {
        
        this.selectedTags[i] = {
          selected: true,
          count: this.selectedTags[i] && this.selectedTags[i].count ? (this.selectedTags[i].count + 1) : 1
        };
        
      });
    });
  }
}

export default angular.module('hackerearthSapientnitroApp.main', [uiRouter])
  .config(routing)
  .component('main', {
    template: require('./main.html'),
    controller: MainController,
    controllerAs: 'ctrl'
  })
  .name;
