 angular.module('cfApp').controller('EventCtrl', ['$scope','$http','multipartForm', function($scope, $http, multipartForm){
    $scope.formData = {},
        $scope.customer = {};
        console.log("princy");
     
     
        $scope.createEvent = function(){
            
            var uploadUrl = '/client/upload';
            multipartForm.post(uploadUrl, $scope.customer);
            console.log($scope.customer.file);
            console.dir($scope.customer.file);
            $scope.formData.target_path = $scope.customer.file.name;
			$http.post('/api/events', $scope.formData).success(function(data) {
				console.log(data);
				$scope.formData = {};           
			}).error(function(data) {            
        });
    };
	$scope.cancelEvent = function(){
		$scope.formData = {};
	};
           
 /*        $http.get('/api/events').success(function(data){
             $scope.events = data;
             $scope.imageUrl = data[0].img;
              console.log(data[0].img);
             console.log(config);
         }) .error(function(data){
              console.log('Error: ' + data);
             
         });*/
               
navadd

 }]);