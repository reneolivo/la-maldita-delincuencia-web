'use strict';

export default function AppConfig($locationProvider, $stateProvider, $urlRouterProvider) {
  $locationProvider.html5Mode(false);

  $stateProvider
    .state('base', {
      abstract: true,
      templateUrl: '/views/layout.html'
    })
    .state('base.home', {
      url: '/',
      templateUrl: '/views/home.html'
    });

    $urlRouterProvider.otherwise('/');
}
