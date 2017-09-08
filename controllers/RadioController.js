'use strict';

angular
  .module('radioApp', [])
  .controller('RadioController', ['$scope', function($scope) {

    // Save and Reset Parameters 
    $scope.lastParam = {};

    $scope.update = function(param) {
      $scope.lastParam = angular.copy(param);
    };

    $scope.reset = function() {
      $scope.param = angular.copy($scope.lastParam);
    };

    $scope.reset();


  }]); // end RadioController


