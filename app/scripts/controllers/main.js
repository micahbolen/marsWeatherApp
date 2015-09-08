'use strict';

/**
 * @ngdoc function
 * @name marsWeatherAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the marsWeatherAppApp
 */
angular.module('marsWeatherAppApp')
  .controller('MainCtrl', function () {
    $scope.latestReport = {};
    $scope.error = {};
    
    $http.get('http://marsweather.ingenology.com/v1/latest/').
      then(function(response) {
      // this callback will be called asynchronously
      // when the response is available
      $scope.latestReport = angular.fromJson(response);
      }, function(response) {
      // called asynchronously if an error occurs
      // or server returns response with an error status.
      $scope.error = angular.fromJson(response);
    });
    
  });
