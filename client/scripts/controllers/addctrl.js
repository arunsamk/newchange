angular.module('cfApp').controller('AddCtrl', ['$scope','$http', function($scope, $http){
    
  $scope.formData ={},
      $scope.createTodo = function() {
        
        console.log('value', $scope.formData.special);
        $http.post('/api/todos', $scope.formData)
            .success(function(data) {
                $scope.formData = {}; // clear the form so our user is ready to enter another
                $scope.todos = data;
                console.log(data);
            })
            .error(function(data) {
                console.log('Error: ' + data);
            });
    };

}]);


