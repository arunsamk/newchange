 var app = angular.module('cfApp');
app.controller('EventDisplayCtrl',  ['$scope','$http', '$window',  '$rootScope', function($scope, $http, $window,   $rootScope){
    $http.get('/api/events').then(function(success){
       			
            $scope.events = success;
//			$scope.events.imageUrl = [];
//        console.log($scope.events);        
//			 for( var i=0; i<data.length; i++)
//			{
//			
//                $scope.events.imageUrl.push($scope.events[i].EventImage);
//				
//                 				
//				console.log('Image Url', $scope.events.imageUrl);
//			 }
//            console.log('Image Url Array', $scope.events.imageUrl);
//        
         }),(function(error){
              console.log('Error: ' + data);
             
         });
    var interval=0;
    function startTicker()
  {
      $("#news li:first").slideUp(function(){

          $(this).appendTo($("#news")).slideDown();
          // console.log('Interval When starting--> ', interval);
      });
  }
  function stopTicker()
  {
      clearInterval(interval);
      // console.log('Interval when Stopped --> ', interval);
  }
  $(document).ready(function(){
  interval=setInterval(startTicker, 1500);
  $("#news").hover(function(){
          clearInterval(interval);
          // console.log('Interval when Stopped --> ', interval);
          stopTicker();
        },function(){
            interval=setInterval(startTicker, 1500);
            // console.log('Interval when ready --> ', interval);
        });
   
});
                    }]);