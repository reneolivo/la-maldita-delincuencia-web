'use strict';

import angular from 'angular';

class ArticlesService {
  constructor($http, settings) {
    this.http = $http;
    this.settings = settings;
  }

  getAll(query) {
    return this.http
      .get(this.settings.apiUrl + '/articles', {params: query})
      .then((response) => {
        return response.data;
      });
  }
}

angular.module('lmd.app')
  .service('ArticlesService', ArticlesService);
