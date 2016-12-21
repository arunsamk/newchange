var cfapplication = angular.module('cfApp');

cfapplication.controller('chusrlistCtrl', ['$scope', '$http', '$rootScope', '$location', function($scope, $http, $rootScope, $location){
console.log($rootScope.chid);
	var parameters = {
			
			ChurchIds: $rootScope.chid			
	};
	var config = {
		params: parameters
	};
	$http.get('/api/listchurch', config).success(function(data){
		$scope.churches = data;
		console.log(data);
	}).error(function(data){
		console.log(data);
	});

	
	$scope.usrLogout = function()
	{
		// console.log('Hello church user list logout');
		$rootScope.usrflag = 0;
		$location.path('/usrlog');
	};
	$scope.getChId = function($index){
		console.log('Index Value', $index);
		//var indx = $index;
		$rootScope.usrchId = $scope.churches[$index].ChurchId;
		console.log('Rootscope index value', $rootScope.usrchId);
		if($rootScope.usrchId)
			{ $location.path('/updchdet'); }
		else
		{ console.log('Where are we going ?'); }
	};
}]);