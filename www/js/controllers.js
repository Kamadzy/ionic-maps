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
.controller('EntityPageCtrl', function($scope, $ionicModal, $timeout, ionicMaterialMotion, ionicMaterialInk, $cordovaGeolocation) {
    ionicMaterialInk.displayEffect();

    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
      code[i].addEventListener('click', function() {
        this.classList.toggle('active');
      });
    }
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function(position){

      var latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

    }, function(error){
      console.log("Could not get location");
    });
})
