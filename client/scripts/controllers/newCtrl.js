var app =angular.module('cfApp');
app.controller('newCtrl', ['$scope','$http', 'todoListService', function ($scope, $http, todoListService) {
    
    var choice = todoListService.choice;
    
  
    if(choice){
        var parameters = {
            
            key: choice.key,
            kez: choice.kez,
            keu: choice.keu,
            keq: choice.keq,
            ker: choice.ker,            
        };
        
        var config = {
            params: parameters
        };
         $http.get('/api/addchurch', config)
         .success(function(data) {
        
             console.log('Data ', data);
            $scope.church = data;                
         })
         .error(function (data) {
          console.log('Error: ' + data);   
         }) ;
   
    }
}])