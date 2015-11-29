window.jQuery = require('jquery');
require('../../node_modules/materialize-css/js/materialize');

import angular  from 'angular';

import './templates';
import 'angular-ui-router';
import 'angular-timeago';

var app = angular.module('lmd.app', [
  'templates',
  'ui.router',
  'yaru22.angular-timeago'
]);

import config from './setup/config';

require('./settings');
require('./controllers/home');
require('./services/articles');

app.config(config);
