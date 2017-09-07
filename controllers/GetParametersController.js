angular.module('radioDev', [])
  .controller('GetParametersController', ['$scope', function($scope) { 

    // Save and Reset Parameters <pre>
    $scope.lastParam = {};

    $scope.update = function(param) {
      $scope.lastParam = angular.copy(param);
    };

    $scope.reset = function() {
      $scope.param = angular.copy($scope.lastParam);
    };

    $scope.reset();

  }]); // end  GetParametersController



//var indexController = hackApp.controller("indexController", function ($scope) {
// controller logic goes here

//$scope.frequency = how to get the freq val?});



