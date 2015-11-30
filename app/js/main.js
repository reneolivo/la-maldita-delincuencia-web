window.jQuery = require('jquery');
window._ = require('lodash');
require('../../node_modules/materialize-css/js/materialize');

import angular  from 'angular';

import './templates';
import 'angular-ui-router';
import 'angular-timeago';
import 'angular-simple-logger';
import 'angular-google-maps';
import 'ng-infinite-scroll';

var app = angular.module('lmd.app', [
  'templates',
  'ui.router',
  'yaru22.angular-timeago',
  'uiGmapgoogle-maps',
  'infinite-scroll'
]);

import config from './setup/config';

require('./settings');
require('./controllers/global');
require('./controllers/home');
require('./filters/static-map');
require('./services/articles');

app.config(config);
