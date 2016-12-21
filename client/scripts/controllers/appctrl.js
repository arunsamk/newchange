var app = angular.module('scotchTodoApp',['angularjs-dropdown-multiselect']);
   app.controller('appCtrl', ['$scope',function($scope) {

//        $scope.example13model = [];
        $scope.example13data = [
            {id: 1, label: "David"},
            {id: 2, label: "Jhon"},
            {id: 3, label: "Lisa"},
            {id: 4, label: "Nicole"},
            {id: 5, label: "Danny"}];
        
        $scope.example13settings = {
            smartButtonMaxItems: 3,
            smartButtonTextConverter: function(itemText, originalItem) {
                if (itemText === 'Jhon') {
                return 'Jhonny!';
                }
        
                return itemText;
            }
        };
}]);
