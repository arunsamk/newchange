var cfapplication = angular.module('cfApp');

cfapplication.service('advimgService', ['$http', function ($http) {
	this.uploadFileToUrl = function(file, uploadUrl){
	var filedata  = new FormData();
		filedata.append('file', file);
		$http.post(uploadUrl, filedata, {
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