'use strict';

var radioApp = angular.module('radioApp', []);

var radioController = radioApp.controller('radioController', function($scope, $window) {
    
  $scope.testClick = function () {
    $window.alert("Hi there");
  };





    // Save and Reset Parameters 
    $scope.lastParam = {};

    $scope.update = function(param) {
      $scope.lastParam = angular.copy(param);
    };

    $scope.reset = function() {
      $scope.param = angular.copy($scope.lastParam);
    };

    $scope.reset();


}); // end radioController