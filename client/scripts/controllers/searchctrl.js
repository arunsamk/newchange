 var app = angular.module('cfApp');
app.controller('SearchCtrl',  ['$scope','$http', '$window',  'todoListService','$rootScope', '$filter', '$location', function($scope, $http, $window,  todoList, $rootScope, $filter, $location){
   

   
   
    $http.get('/api/addchurch')
         .success(function(data) {
            $scope.church = data; 
        console.log('Tod ',$scope.church);
             console.log(config);  
         })
         .error(function (data) {
          console.log('Error: ' + data);   
         }) ;
    $scope.formData ={};
    $scope.formData.key = [];  
    $scope.formData.lan = [];
    $scope.formData.are = [];
    $scope.formData.ser = [];
    $scope.formData.spe = [];
    
    var choice = {};
    
  $scope.searchTodo = function () {
          console.log('SER VAlue - > ', $scope.formData.ser);
          console.log('SPE VAlue - > ', $scope.formData.spe);
      console.log('LAN VAlue - > ', $scope.formData.lan);
          console.log('DIS VAlue - > ', $scope.formData.key);
      
        if( $scope.formData.ser.length >0 && $scope.formData.spe.length >0 )
            {
             
             $window.alert("select option");
             $scope.formData.spe = []; $scope.formData.ser = [];              
        }else{
          $location.path('/search');
        }

       choice.key = $scope.formData.key;
      choice.kez = $scope.formData.lan; 
      choice.keu = $scope.formData.ser;
      choice.keq = $scope.formData.spe;
      choice.ker = $scope.formData.are;
       todoList.transferChoice(choice);        
      
      
        var parameters = {
            
            key: $scope.formData.key,
            kez: $scope.formData.lan,
            keu: $scope.formData.ser,
            keq: $scope.formData.spe,
            ker: $scope.formData.are,            
        };
      console.log('Area', $scope.formData.are);
        
        var config = {
            params: parameters
        };
         $http.get('/api/addchurch', config)
         .success(function(data) {
            $scope.church = data; 
             console.log(config);  
         })
         .error(function (data) {
          console.log('Error: ' + data);   
         }) ;
   
       }    
  
//   $http.get('/public/todos')
//         .success(function(data) {
//   
//
//
//             console.log('Data ', data);
//            $scope.church = data;                
//         })
//         .error(function (data) {
//          console.log('Error: ' + data);   
//         }) ;
//    
    

    
}]);


app.directive('selectPicker', ['$parse', function ($parse) {
        return {
            restrict: 'A',
            require: '?ngModel',
            priority: 10,
            compile: function (tElement, tAttrs, transclude) {
                tElement.selectpicker($parse(tAttrs.selectpicker)());
                tElement.selectpicker('refresh');
                return function (scope, element, attrs, ngModel) {
                    if (!ngModel) return;

                    scope.$watch(attrs.ngModel, function (newVal, oldVal) {
                    scope.$evalAsync(function () {
                        if (!attrs.ngOptions || /track by/.test(attrs.ngOptions)) element.val(newVal);
                        element.selectpicker('refresh');
                    });
                    });

                    ngModel.$render = function () {
                    scope.$evalAsync(function () {
                        element.selectpicker('refresh');
                    });
                    }
                
                };
            }
        }
        }]);













