angular.module('starter', ['ionic', 'starter.controllers','ionic-material','ionMdInput'])

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

    .state('login',{
      url:'/login',
        templateUrl:'templates/login.html',
        controller:''
    })

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })




  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/login');
});
