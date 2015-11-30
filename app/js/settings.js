'use strict';

import angular from 'angular';

const settings = {
  apiUrl: 'http://localhost:3000'
};

angular.module('lmd.app')
  .constant('settings', settings);
