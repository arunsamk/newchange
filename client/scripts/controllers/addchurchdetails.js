var cfapplication = angular.module('cfApp');

cfapplication.controller('chdetCtrl', ['$scope', '$http', 'fuService', function($scope, $http, fuService) {
    $scope.addChurchDetails = function() {
        //mergeserviceArray();
        var buffarray = [];
        buffarray = $scope.chformData.chService[0].split("\n");
        console.log('BuffArray', buffarray);
        $scope.chformData.chService = '';
        $scope.chformData.chService = buffarray;
        console.log('Service Array formed newly', $scope.chformData.chService);

        var buffarray = [];
        buffarray = $scope.chformData.chAddress[0].split("\n");
        $scope.chformData.chAddress = '';
        $scope.chformData.chAddress = buffarray;
        console.log('Service Array formed newly', $scope.chformData.chAddress);

        var buffarray = [];
        buffarray = $scope.chformData.chSplService[0].split("\n");
        $scope.chformData.chSplService = '';
        $scope.chformData.chSplService = buffarray;
        console.log('Service Array formed newly', $scope.chformData.chSplService);

        var file = $scope.chformData.image;
        var uploadUrl = '/chImageUpload';
        fuService.uploadFileToUrl(file, uploadUrl);
        console.log('hello inside addChurchDetails function');
        // console.log('ChruchData', $scope.chformData);
        $scope.chformData.fname = file.name;
        $http.post('/api/addchurch', $scope.chformData).success(function(data) {
            console.log('Successful Record Creation');
            console.log('Data', data);
            $scope.chformData = {};
            angular.element("input[type='file']").val(null);
        }).error(function(data) {
            console.log('Unsucessful Post Occurance');
            console.log('Error : ' + data);
        });
    };
    /*var mergeserviceArray = function(){
    	//console.log('Array', $scope.chformData.chService);
    	$scope.chformData.chService = {};
    	if($scope.chformData.chService1P1){
    		var St1 = $scope.chformData.chService1P1+' '+$scope.chformData.ch1P2+' '+$scope.chformData.ch1P3+' '+'To'+' '+$scope.chformData.ch1P5+' '+$scope.chformData.ch1P6;
    	}else{ St1 = ''; }
    	if($scope.chformData.chService2P1){
    		var St2 = $scope.chformData.chService2P1+' '+$scope.chformData.ch2P2+' '+$scope.chformData.ch2P3+' '+'To'+' '+$scope.chformData.ch2P5+' '+$scope.chformData.ch2P6;
    	}else{ St2 = ''; }
    	if($scope.chformData.chService3P1){			
    		var St3 = $scope.chformData.chService3P1+' '+$scope.chformData.ch3P2+' '+$scope.chformData.ch3P3+' '+'To'+' '+$scope.chformData.ch3P5+' '+$scope.chformData.ch3P6;
    	}else{ St3 = '';}
    	if($scope.chformData.chService4P1){
    		var St4 = $scope.chformData.chService4P1+' '+$scope.chformData.ch4P2+' '+$scope.chformData.ch4P3+' '+'To'+' '+$scope.chformData.ch4P5+' '+$scope.chformData.ch4P6;
    	}else{ St4 = '';}
    	if (St1 && St2 && St3 && St4){
    		console.log(4);
    		$scope.chformData.chService = St1 + '\n' + St2 + '\n' + St3 + '\n' + St4;	
    	}else if( St1 && St2 && St3){
    		console.log(3);
    		$scope.chformData.chService = St1 + '\n' + St2 + '\n' + St3;
    	}else if( St1 && St2 ){
    		console.log(2);
    		$scope.chformData.chService = St1 + '\n' + St2;
    	}else if(St1){
    		console.log(1);
    		$scope.chformData.chService = St1;
    	}else{
    		console.log(0);
    		$scope.chformData.chService = {};
    	}
    	
    	// $scope.chformData.chService = $scope.chformData.chService.push(St1);
    	// for(var i= 0; i<=4; i++)
    	// {
    	// 	$scope.chformData.chService.push(St(i));
    	// 	console.log('St ', St(i));
    	// }
    	// $scope.chformData.chService[1].push(St1);
    	// $scope.chformData.chService[2].push(St2);
    	// $scope.chformData.chService[3].push(St3);
    	// $scope.chformData.chService[4].push(St4);
    	console.log('Combine Array', $scope.chformData.chService);
    };*/
    /*$scope.noofServices = function(){
    	//console.log('Number', $scope.numvalue);
    	var number = $scope.numvalue;
    	$scope.numvalue = [];
    	
    	switch(number)
    	{
    		case '1':
    			for(var i =0; i < number; i++)
    			{
    				$scope.numvalue.push(i);
    			}
    			console.log(' Nothing ', $scope.numvalue);
    			break;
    		case '2':
    			for(var i =0; i < number; i++)
    			{
    				$scope.numvalue.push(i);
    			}
    			console.log(' Nothing ', $scope.numvalue);
    			break;
    		case '3':
    			for(var i =0; i < number; i++)
    			{
    				$scope.numvalue.push(i);
    			}
    			console.log(' Nothing ', $scope.numvalue);
    			break;
    		case '4':
    			for(var i =0; i < number; i++)
    			{
    				$scope.numvalue.push(i);
    			}
    			console.log(' Nothing ', $scope.numvalue);
    			break;
    		default:
    			console.log(' Nothing ');
    			break;
    	}
    	console.log('Val', $scope.numvalue);
    };*/
}]);