var cfapplication = angular.module('cfApp');

cfapplication.service('fuService', ['$http', function ($http) {
	this.uploadFileToUrl = function(file, uploadUrl){
	var fd  = new FormData();
		fd.append('file', file);
		$http.post(uploadUrl, fd, {
			transformRequest: angular.identity,
			headers: { 'Content-Type': undefined}
		}).success(function(){			
			console.log('File upload to Url  Successful');
			// clearuploaddb(file);
		}).error(function(){
			console.log('File upload to Url  not Successful');
		});
	};
}]);