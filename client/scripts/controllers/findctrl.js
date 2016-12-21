 angular.module('cfApp').controller('FindCtrl', ['$scope','$http', function($scope, $http){
      
     $scope.toggle = function() {
        $scope.myVar = !$scope.myVar;   
 };
 }]);
