var app = angular.module('cfApp');

app.controller('MainCtrl', ['$scope', '$location', 'ngDialog', function($scope, $location, ngDialog){
	$scope.chkChurch = function(){
		alert('Select FreeListing');
		
		/*console.log('Inside ngDialog');
		ngDialog.open({template: 'templateId'});
		var msgbox = $dialog.messageBox('Select FreeListing or Premium', [{label: 'Free Listing', result: 'free'}, {label : '', result: 'premium'}]);
		msgbox.open().then(function(result){
			if(result === 'free')
				$location.path("/add");
			if( result === 'premium')
				console.log('Hello Premium User');
		})*/
	};
}]);