cfapplication = angular.module('cfApp');

cfapplication.controller('addadvertCtrl', ['$scope', '$http', 'fuService', function ($scope, $http, fuService) {
	$scope.addAdvertRec = function(){
		console.log('Image', $scope.frmD.AdvertImage);
		$scope.filedetails = $scope.frmD.AdvertImage;
		console.log('File Deatils: ', $scope.filedetails);
		$scope.frmD.AdvertImage = $scope.frmD.AdvertId + $scope.filedetails.name;
		console.log('File Name', $scope.frmD.AdvertImage);
		var buffarray = [];
		buffarray = $scope.frmD.AdvertContent[0].split("\n");
		console.log('Entire User Array', $scope.frmD);
		console.log('Buffer Value', buffarray);
		//$scope.frmD.ChurchId = '';
		$scope.frmD.AdvertContent = buffarray;
		var file = $scope.frmD.filedetails;
		var uploadUrl = "/advimageUpload";
		fuService.uploadFileToUrl(file, uploadUrl);
		//advimgService.uploadadvFileToUrl(file,uploadUrl);
		console.log('Refined array', $scope.frmD.ChurchId);
		$http.post('/api/addadvert', $scope.frmD).success(function(data){
			console.log('Image', $scope.frmD.AdvertImage);
			$scope.frmD = {}; angular.element("input[type='file']").val(null);
			console.log('Sucessful Post Request ', data);
		}).error(function(data){
			console.log('Unsuccessful post Request ', data);
		});
	};
	$scope.cancelAdvertRec = function(){
		$scope.frmD = {}; angular.element("input[type='file']").val(null);		
	};
}]);