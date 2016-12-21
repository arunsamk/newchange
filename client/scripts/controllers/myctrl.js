var app =angular.module('cfApp');
app.controller('MyCtrl', ['$scope','$http', 'ngDialog','$location', '$anchorScroll', function ($scope, $http, ngDialog, $location, $anchorScroll) {
    $scope.clickToOpen = function(){
     ngDialog.open({
          template: 'templateID',
         controller:'SearchCtrl',
          className: 'ngdialog-theme-default',
          scope: $scope,
          showClose: true,
        closeByDocument: true,
       overlay: false,
         width: '40%'
         
                     
                    });
    };
    
     
    $scope.onClick = function () {
        $location.hash('contactus');
        $anchorScroll();
    };
    
$('[data-toggle="tooltip"]').tooltip();
 $('#navadd').tooltip();
}]);