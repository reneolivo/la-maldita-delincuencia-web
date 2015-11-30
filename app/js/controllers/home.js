'use strict';

import angular from 'angular';

class HomeCtrl {
  constructor(ArticlesService) {
    this.ArticlesService = ArticlesService;
    this.articlesPerPage = 12;
    this.page = 0;
    this.loadingArticles = false;
    this.morePages = true;
    this.articles = [];
  }

  loadNextPage() {
    if (this.loadingArticles || this.morePages === false) return;
    this.loadingArticles = true;

    this.page++;
    this.ArticlesService
      .getAll({
        offset: this.articlesPerPage * (this.page - 1),
        limit: this.articlesPerPage
      })
      .then((articles) => {
        if (articles.length === 0) this.morePages = false;

        for(let article of articles) {
          this.articles.push(article);
        }

        this.loadingArticles = false;
      });
  }
}

angular.module('lmd.app')
  .controller('HomeCtrl', HomeCtrl);
