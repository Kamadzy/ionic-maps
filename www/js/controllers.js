angular.module('starter.controllers', [])

  .controller('AppCtrl', function ($scope, $ionicModal, $timeout) {
    $scope.loginData = {};

    var navIcons = document.getElementsByClassName('ion-navicon');
    for (var i = 0; i < navIcons.length; i++) {
      navIcons.addEventListener('click', function () {
        this.classList.toggle('active');
      });
    }
  })
  .controller('LoginCtrl', function ($scope, $ionicModal, $timeout, ionicMaterialInk) {
    ionicMaterialInk.displayEffect();
  })
  .controller('EntityPageCtrl', function ($scope, $ionicModal, $timeout, ionicMaterialMotion, ionicMaterialInk, $cordovaGeolocation, $ionicPopup) {
    ionicMaterialInk.displayEffect();
    // Toggle Code Wrapper
    var code = document.getElementsByClassName('code-wrapper');
    for (var i = 0; i < code.length; i++) {
      code[i].addEventListener('click', function () {
        this.classList.toggle('active');
      });
    }

    //map
    var options = {timeout: 10000, enableHighAccuracy: true};

    $cordovaGeolocation.getCurrentPosition(options).then(function (position) {
      $scope.latitude = position.coords.latitude;
      $scope.longtitude = position.coords.longitude;
      var latLng = new google.maps.LatLng($scope.latitude, $scope.longtitude);

      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      //Wait until the map is loaded
      google.maps.event.addListenerOnce($scope.map, 'idle', function () {

       var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng,
          draggable: true
        });

        marker.addListener("dragend", function () {
          $scope.latitude = marker.position.lat();
          $scope.longtitude = marker.position.lng();
        });

        var infoWindow = new google.maps.InfoWindow({
          content: "Here I am!"
        });

        google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
        });

      });

    }, function (error) {
      $ionicPopup.alert({
        title: 'Error',
        template: 'Cant get your position'
      });
      $scope.latitude = 47.8557;
      $scope.longtitude = 35.1053;
      var latLng = new google.maps.LatLng($scope.latitude, $scope.longtitude);

      var mapOptions = {
        center: latLng,
        zoom: 15,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      $scope.map = new google.maps.Map(document.getElementById("map"), mapOptions);

      //Wait until the map is loaded
      google.maps.event.addListenerOnce($scope.map, 'idle', function () {

        var marker = new google.maps.Marker({
          map: $scope.map,
          animation: google.maps.Animation.DROP,
          position: latLng,
          draggable: true
        });

        marker.addListener("dragend", function () {
          $scope.latitude = marker.position.lat();
          $scope.longtitude = marker.position.lng();
        });

        var infoWindow = new google.maps.InfoWindow({
          content: "Here I am!"
        });

        google.maps.event.addListener(marker, 'click', function () {
          infoWindow.open($scope.map, marker);
        });

      });
    });

    $scope.showCord = function () {
      $ionicPopup.alert({
        title: 'Create',
        template: 'Name: ' + $scope.nameID + 'Description: ' + $scope.descr + 'Latitude: ' + $scope.latitude + 'Longitude: ' + $scope.longtitude
      });
    }
  })
  .controller('BarcodeCtrl', function ($scope, $cordovaBarcodeScanner) {
    $scope.scanBarcode = function () {
      $cordovaBarcodeScanner.scan().then(function (imageData) {
        alert(imageData.text);
        console.log("Barcode Format -> " + imageData.format);
      }, function (error) {
        console.log("An error happened -> " + error);
      });
    };
  });
