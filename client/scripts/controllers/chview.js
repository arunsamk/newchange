var cfapplication = angular.module('cfApp');

cfapplication.constant('videoUrl', 'imageUrl');

cfapplication.controller('chviewCtrl', ['$scope', '$http', '$sce', 'videoUrl', 'chIdService', '$rootScope', function ($scope, $http, $sce, videoUrl, chIdService, $rootScope) {
	if($rootScope.usrchId)
	{ var parameters = {ChurchId: $rootScope.usrchId}; var config = {params: parameters}; }	
	else{if(chidservice.idval){ var churchId = chIdService.idval; var parameters = { ChurchId: churchId }; var config = { params: parameters }; }}
	$http.get('/api/chview/single', config).success(function(data){
		$scope.churches = data;
		videoUrl = data[0].ChurchVideo;
		$scope.imageUrl = data[0].ChurchPics;		
		//$scope.imageUrl = 'file:///D:/ArunKsamson/Dev-Proj/churchfinder/imageuploads/images.jpg-1479385296657.jpg'
		console.log('Image URL  --  ', $scope.imageUrl);
		// console.log('Data   ', data[0].ChurchVideo);
		// console.log('Video URL  --- >>>   ', videoUrl);
		// getImagePath(chImage);

		// arrayOne = JSON.stringify($scope.churches);

		// console.log('Video', arrayOne);
		// $scope.vidLink = $scope.churches.ChurchVideo;
		// console.log(data);		
	}).error(function(data){
		console.log('Error : ', data);
	});
	$scope.trustSrc = function(src) {
		// console.log('Global Variable -->> ', arrayOne['ChurchVideo']);
		// console.log('Again Video URL  --- >>>   ', videoUrl);
		// console.log('Source  -- >> ', src);
   		return $sce.trustAsResourceUrl(src + videoUrl);
  	};
  	// $scope.trustSrc = function(isrc){
  	// 	// console.log('Image Url  -- ', imageUrl);
  	// 	console.log('Full path ', isrc+'/'+imageUrl);
  	// 	return $sce.trustAsResourceUrl(isrc + '/' + imageUrl);
  	// };
  	$scope.movie = {src: 'http://www.youtube.com/embed/'};
  	// $scope.image = { isrc: 'imageuploads'};

	// $scope.getIframeSrc = function(src) {
	// 	src = $scope.churches.ChurchVideo;
	// 	//console.log('Source ', src);
 //  		return 'https://www.youtube.com/embed/' + src;
	// };
	// var getImagePath = function(chImage){
	// 	console.log('Inside image acquitance');
	// 	console.log('Picture File Name', $scope.churches.ChurchPics);
	// 	chImage = 'imageuploads/' + $scope.churches.ChurchPics;
	// 	console.log('Image Location ', chImage);
	// 	return chImage;
	// };
}]);