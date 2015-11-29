window.jQuery = require('jquery');
require('../../node_modules/materialize-css/js/materialize');

import angular from 'angular';

import 'angular-ui-router';
import './templates';

var app = angular.module('lmd.app', [
  'templates',
  'ui.router'
]);

import config from './setup/config';
app.config(config);
