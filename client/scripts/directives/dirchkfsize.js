var cfapplication = angular.module('cfApp');

/*app.controller('chdetCtrl', function($scope) {
  $scope.name = 'World';
});
*/
cfapplication.directive('checkFileSize', ['$parse', function($parse){
  return{
    restrict: 'A',
    link: function(scope, element, attrs){
      var model = $parse(attrs.checkFileSize);
      var modelSetter = model.assign;

      /*console.log('Model ' + model);
      console.log('ModelSetter ' + modelSetter);*/
      
      element.bind('change', function(){
        if(element[0].files[0].size > 2048000){
          alert('Maximum Image Size should not be greater than 2Mb');
          angular.element("input[type='file']").val(null);
        }else{
          alert('Acceptable image size');
        }
        scope.$apply(function(){
          modelSetter(scope, element[0].files[0]);
        });
      });
    }
  };
}]);
