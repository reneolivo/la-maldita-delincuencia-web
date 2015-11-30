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

  staticMapSrc(center) {
    return [
      'http://maps.googleapis.com/maps/api/staticmap',
      '?size=300x300',
      '&sensor=false',
      '&zoom=15',
      '&style=feature:administrative|element:labels.text.fill|color:0x444444',
      '&style=feature:landscape|element:all|color:0xf2f2f2',
      '&style=feature:poi|element:all|visibility:off',
      '&style=feature:road|element:all|saturation:-100|lightness:45',
      '&style=feature:road.highway|element:all|visibility:simplified',
      '&style=feature:road.arterial|element:labels.icon|visibility:off',
      '&style=feature:water|element:all|color:0x4f595d|visibility:on',
      `&markers=${center[0]},${center[1]}`
    ].join('');
  }
}

angular.module('lmd.app')
  .controller('HomeCtrl', HomeCtrl);
