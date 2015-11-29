'use strict';

export default function AppConfig(uiGmapGoogleMapApiProvider, $locationProvider, $stateProvider, $urlRouterProvider) {
  uiGmapGoogleMapApiProvider.configure({
    v: '3.20'
  });

  /* STATES */
  $locationProvider.html5Mode(false);

  $stateProvider
    .state('base', {
      abstract: true,
      templateUrl: '/views/layout.html'
    })
    .state('base.home', {
      url: '/',
      templateUrl: '/views/home.html',
      controller: 'HomeCtrl as home'
    });

    $urlRouterProvider.otherwise('/');
}
