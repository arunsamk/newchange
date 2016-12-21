var mongoose = require('mongoose');
//churchS = require('./models.js');


module.exports = {	
	getIndex: function(request, response){
		res.sendFile('index');		
	},
/*	chdetpost: function(request, response){
		console.log('Church  ', churchS);
		console.log('Inside chdetpost');
		churchS.create({			
			ChurchId: request.body.chId,
			ChurchName: request.body.chName,
			ChurchDenomination: request.body.chDenomination,
			ChurchPastor: request.body.chPastor
		}, function(err, chdet){
			if(err)
				response.send(err);
			response.json(chdet);
		});
	}*/
};