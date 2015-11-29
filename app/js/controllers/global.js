'use strict';

import angular from 'angular';

class GlobalCtrl {
  constructor(settings) {
    this.settings = settings;
  }
}

angular.module('lmd.app')
  .controller('GlobalCtrl', GlobalCtrl);
