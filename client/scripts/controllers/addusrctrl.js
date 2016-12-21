var cfapplication = angular.module('cfApp');

//var cfapplication = angular.constant('pwdflag');

cfapplication.controller('addUsrCtrl', ['$scope', '$http', function($scope, $http){
	$scope.clickVal = function(){
//		$scope.$watch('frmD.ChurchId', function(){
//			 $scope.frmD.newchid = $scope.frmD.ChurchId.replace(/\n/g, ',');			 
//			});
	};
	$scope.addUsrRec = function(){		
//		var buffarray = {};
//		//$scope.frmD.ChurchId = $scope.frmD.newchid;					
//		var arrcnt = $scope.frmD.newchid.length;
//		 console.log('Array Count', arrcnt);
//		 for(var i =0; i<arrcnt; i++)
//			 {
//			 	buffarray[i] = $scope.frmD.newchid[i];
//			 	console.log('I value', i);
//			 	console.log('Buffer', buffarray);
//			 }
//		 $scope.frmD.ChurchId = buffarray;
		var buffarray = [];
		buffarray = $scope.frmD.ChurchId[0].split("\n");
		 console.log('Entire User Array', $scope.frmD);
		 console.log('Buffer Value', buffarray);
		 $scope.frmD.ChurchId = '';
		 $scope.frmD.ChurchId = buffarray;
		 console.log('Refined array', $scope.frmD.ChurchId);
		$http.post('/api/AddUsrDet', $scope.frmD).success(function(data){
			console.log('Success  ', data);
			$scope.frmD = {};
		}).error(function(data){
			console.log('Unsuccessful', data);
		});		
	};			
	$scope.cancelUsrRec = function(){
		$scope.frmD = {};
	};
	$scope.chkPwd = function(){
		if($scope.frmD.UserPwd === $scope.frmD.UserPwdT)
			{ console.log('Passwords Match'); }
		else
			{ console.log('Passwords do not Match'); alert('Please re-enter passwords'); $scope.frmD.UserPwd = ''; $scope.frmD.UserPwdT = ''; angular.element('#pwd').focus(); }
	};
}]);