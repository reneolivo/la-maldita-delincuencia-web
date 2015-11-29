'use strict';

import angular from 'angular';

class HomeCtrl {
  constructor() {
    this.articles = [];
  }
}

angular.module('lmd.app')
  .controller('HomeCtrl', HomeCtrl);
