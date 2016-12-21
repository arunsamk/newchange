var cfapplication = angular.module('cfApp');

cfapplication.controller('addChFreeCtrl', ['$scope', '$http', function($scope, $http){
	$scope.addChRec = function()
	{
		console.log($scope.frmD.ChruchArea);
		var buffarray = [];
		buffarray = $scope.frmD.ChurchAddress[0].split("\n");
		$scope.frmD.ChurchAddress = buffarray;
		$scope.frmD.freeflag = 1;
		$http.post('/api/addchurch', $scope.frmD).success(function(data){
			$scope.churches = data;			
			console.log('Successful post Result - ', data);
			$scope.frmD = {};
		}).error(function(data){
			console.log('Unsucessful post request', data);
		});
	};
	$scope.cancelChRec = function()
	{
		$scope.frmD = {};
	};
}]);