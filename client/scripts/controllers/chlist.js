var cfapplication = angular.module('cfApp');

cfapplication.constant('passchId');

cfapplication.controller('chListCtrl', ['$scope', '$http', 'chIdService', 'passchId', function ($scope, $http, chId, passchId) {

	$http.get('/api/listchurch').success(function(data){
		passchId = {};
		$scope.churches = data;
		console.log('Data Value', data);
//		getInd($index);
		passchId = data;
	}).error(function(data){
		console.log('Error : ', data);
	});		
//	var getInd = function($index){
//		var indx = $index
//	};
	$scope.getchId = function($index){
		console.log('Val ', passchId);
		var indx = $index;
		console.log('hellow', indx);		
//		console.log('Church Id', $scope.churches.ChurchId);
		var idval = passchId[indx].ChurchId;
		console.log('Id ', idval);
		chId.transferidval(idval);
	};
}]);