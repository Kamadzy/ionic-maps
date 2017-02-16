angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
      navIcons.addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }
})
.controller('LoginCtrl', function($scope, $ionicModal, $timeout, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
})
.controller('EntityPageCtrl', function($scope, $ionicModal, $timeout, ionicMaterialMotion, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
      code[i].addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }
})
