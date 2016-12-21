var cfapplication =  angular.module('cfApp');

cfapplication.controller('admsetCtrl', ['$scope', '$location', '$rootScope', function($scope, $location, $rootScope){
	$scope.logOutAdm = function(){
		$rootScope.usrflag = ''; $location.path('/usrlog');
	};
	$scope.loadEvent = function(){
		$location.path('/event');		
	};
	$scope.loadFreeChurch = function(){
		$location.path('/free');
	};
	$scope.loadAdvert = function(){
		$location.path('/addadvert');
	};		
}]);