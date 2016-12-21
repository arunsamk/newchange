cfapplication.factory('chIdService', function($rootScope){
	var chId = {};
	chId.transferidval = function(idval){
		console.log('idval in factory', idval);
		this.idval = idval;
	};
	return chId;
});