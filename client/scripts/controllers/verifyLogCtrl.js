var cfapplication = angular.module('cfApp');

cfapplication.controller('verifyLogCtrl', ['$scope', '$http', '$location', '$rootScope', function($scope, $http, $location, $rootScope){
	$scope.chkUsrRec = function(){
		console.log('Submitted');
		var parameters = { UserId: $scope.frmD.UserId };
		console.log('UserId', $scope.frmD.UserId);
		var config = { params: parameters };
		$http.get('/api/verifyusr', config).success(function(data){
			if(data.length){
				var uid = data[0].UserId;
				var pwd = data[0].UserPwd;
				console.log('User Id  -- >>>  ', uid);
				console.log('Password  --- >>>', pwd);
				var usrflag = 0;
			}
			console.log('User Flag before Condition  -- >> ', usrflag);
			if(uid && pwd){ 
				if( uid == $scope.frmD.UserId && pwd == $scope.frmD.UserPwd){
					usrflag=2;
				}
				else{ console.log('No Admin'); }
			// 	if( $scope.usrs.UserId == $scope.frmD.UserId && $scope.usrs.UserPwd == $scope.frmD.UserPwd ){
			// 		usrflag = 1; 
			// 		console.log('User Flag   ', usrflag);
			// } else{ 
			// 	console.log('User Flag', usrflag);				
			// 	}
			}else { console.log('Hello');}
			
			if (usrflag == 1)
				{
					$rootScope.usrflag = usrflag;
					$location.path('/chusrlist');
					$rootScope.chid = $scope.usrs[0].ChurchId;
					console.log('$rootScope.usrs.ChurchId', $rootScope.chid);
				}
			else{ console.log('No where to go'); }
			if( usrflag == 2)
				{ $rootScope.usrflag = usrflag; $location.path('/admset'); console.log('Welcome Administrator'); }
			else{ console.log('Go No where'); }
		}).error(function(data){
			console.log(data);
		});
	};
	$scope.clrUsrRec = function(){
		$scope.frmD = {};
	};	
}]);