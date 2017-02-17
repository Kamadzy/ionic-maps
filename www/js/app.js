angular.module('starter', ['ionic', 'starter.controllers','ionic-material','ionMdInput','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/menu.html',
      controller: 'AppCtrl'
    })

    .state('login',{
      url:'/login',
        templateUrl:'templates/login.html',
        controller:'LoginCtrl'
    })

    .state('app.entity-page',{
      url:'/entity-page',
      views: {
        'menuContent': {
          templateUrl: 'templates/entity-page.html',
          controller: 'EntityPageCtrl'
        }
      }
    })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
