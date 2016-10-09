import angular from 'angular';
// import ngAnimate from 'angular-animate';
import ngCookies from 'angular-cookies';
import ngResource from 'angular-resource';
import ngSanitize from 'angular-sanitize';
import mui from 'muicss/angular';
import _ from 'ng-lodash';
import 'angular-socket-io';

import uiRouter from 'angular-ui-router';

// import ngMessages from 'angular-messages';


import {
  routeConfig
} from './app.config';

import navbar from '../components/navbar/navbar.component';
import footer from '../components/footerbar/footerbar.component';
import sidedrawer from './components/sidedrawer/sidedrawer.component';
import productlist from './components/productlist/productlist.component';
import prodtile from './components/prodtile/prodtile.component';
import providericon from './components/providericon/providericon.component';
import ratingstar from './components/ratingstar/ratingstar.component';
import main from './main/main.component';
import constants from './app.constants';
import util from '../components/util/util.module';
import socket from '../components/socket/socket.service';

import './app.scss';

angular.module('hackerearthSapientnitroApp', [ngCookies, ngResource, ngSanitize, 'btford.socket-io',
    mui,
    uiRouter, sidedrawer, navbar, footer, productlist, prodtile, providericon, ratingstar, main, constants, socket, util
  ])
  .config(routeConfig);

angular.element(document)
  .ready(() => {
    angular.bootstrap(document, ['hackerearthSapientnitroApp'], {
      strictDi: false
    });
  });