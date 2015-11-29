'use strict';

import angular from 'angular';

class HomeCtrl {
  constructor(ArticlesService) {
    this.ArticlesService = ArticlesService;
    this.articles = [];

    this.ArticlesService.getAll().then((articles) => {
      this.articles = articles;
    });
  }
}

angular.module('lmd.app')
  .controller('HomeCtrl', HomeCtrl);
