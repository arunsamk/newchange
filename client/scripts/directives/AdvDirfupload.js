var cfapplication = angular.module('cfApp');

cfapplication.directive('fileModel',['$parse', function($parse){
	return{
		restrict: 'A',
		link: function(scope, element, attrs){
			var model = $parse(attrs.fileModel);
			var modelsetter = model.assign;
		      
			element.bind('change', function(){
				if(element[0].files[0].size > 2048000){
					alert('Exceeded Maximum Limit');
					angular.element()
				}else{
					alert('Right Size');
				}
				$scope.apply(function(){
					modelsetter(scope, element[0].files[0]);
				});
			});
		};
	};		
}]);