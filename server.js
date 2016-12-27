//Declaring variable for middlewares connect and serve-static.
var express = require('express');
var application = express();
var path = require('path');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var Schema = mongoose.Schema;
var multer = require('multer');
var util = require('util');
//Allocating a value or looking for port dynamically.
var port = process.env.PORT || 8080;
//var site = require('./config/route.js');
var db = require('./config/conn.js');
var mkdirp = require('mkdirp');
//var schema = require('./config/models.js');


//Mongo DB connection
var dbConn = mongoose.connect(db.url);


//Schema Structure
var chdet= new Schema({
	ChurchId: { type: String, unique: true}, ChurchName: String, ChurchDenomination: String, ChurchPhone: Number,
  ChurchArea: String, ChurchPincode: Number, ChurchPastor: String, ChurchAddress: [String],	ChurchCity: String, ChurchState: String, Mobile: Number,
	ChurchLanguage: String, ChurchService: [String], ChurchSplService: [ String], ChurchContent: String, ChurchPics: String,
	ChurchVideo: String, ChurchFeatured: String, UserId: String, FlagMB: Boolean
});

var advertdet = new Schema({
	AdvertId: { type: String, unique: true}, AdvertTitle: String, AdvertContent: [String], AdvertPics: String
});

var usrdet = new Schema({
	UserId: {type: String, unique: true}, UserName: String, UserEmail: String, UserPwd: String, ChurchId: [String]
});

var Eventdet = new Schema({ChurchId: Number, EventId: Number, EventContent: String, EventTitle: String,
	   EventImage :  String
    });

//Schema Definition
var church = mongoose.model('churchdetails', chdet);
var advert = mongoose.model('advertdetails', advertdet);
var usr = mongoose.model('usrdetails', usrdet);
var Event = mongoose.model('events', Eventdet);
//Configuring middleware to look in folders
application.use(express.static(__dirname + '/client'));
application.use('/node_modules', express.static(__dirname + '/node_modules'));
application.use('/images', express.static(__dirname + '/client/images'));
application.use('/views', express.static(__dirname + '/client/views'));
application.use(morgan('dev'));
application.use(bodyParser.urlencoded({ 'extended': true }));
application.use(bodyParser.json());
application.use(bodyParser.json({ type: 'application/vnd.api+json'}));

//Uploading a file
//Uploading Church Images
var storage = multer.diskStorage({
	destination: function(request, file, cb){
		var dest = './client/chimageuploads/';
		mkdirp.sync(dest);
		cb(null, dest);
	},
	filename:function(request, file, cb){
		var d = new Date();
		var f = file.originalname;
		var filepath = f;
		//var filepath =  './client/chimageuploads/' + f;
		cb(null, filepath);
	}
});

var upload = multer({storage: storage});

application.post('/chImageUpload', upload.single('file'), function(request, response){
	response.json({success: true});
});

//Uploading Advertisement Images
var advstorage = multer.diskStorage({
	destination: function(request, file, cb){
		var dest = './client/advimageuploads/';
		mkdirp.sync(dest);
		console.log('Destination ', dest);
		cb(null, dest);
	},
	filename:function(request, file, cb){
		var d = new Date();
		var f = file.originalname;
		var filepath = f;
		//var filepath =  './client/advimageuploads/' + f;
		console.log('Path of the File ', filepath);
		cb(null, filepath);
	}
});

var upload = multer({storage: advstorage});

application.post('/advImageUpload', upload.single('file'), function(request, response){
	console.log('Advertisement File Upload Sucessful');
	response.json({success: true});
});

//Uploading Event Images
 var storage = multer.diskStorage({
        destination: function (request, file, cb){
            cb(null, './client/upload')
        },
        filename: function (request, file, cb) {
            cb(null, file.originalname);

        }
    });
var upload = multer({ storage: storage });
application.post('/client/upload', upload.single('file'), function(request, response){
    //console.log(request.body);
    //console.log(request.file);
    //console.log(request.file.originalname);
    response.json({success: true});
});
//Church Details DB operations
application.post('/api/addchurch', function(request, response){
	if( request.body.freeflag != 1 )
	{
		var f = request.body.fname;
		var fi = f.split('.jpg').map( function( val ){ return val; });
		// console.log('Fi',fi);
		var fileLocName = 'chimageuploads/' + fi[0] + '.jpg';
		//console.log('File', fileLocName);
		church.create({
			ChurchId: request.body.chId,
			ChurchName: request.body.chName,
			ChurchDenomination: request.body.chDenomination,
			ChurchPastor: request.body.chPastor,
			ChurchAddress: request.body.chAddress,
			ChurchArea: request.body.chArea,
			ChurchPincode: request.body.chPincode,
			ChurchLanguage: request.body.chLanguage,
			ChurchService: request.body.chService,
			ChurchSplService: request.body.chSplService,
			ChurchContent: request.body.chContent,
			ChurchPics: fileLocName,
			ChurchVideo: request.body.chVideos,
			ChurchFeatured: request.body.chFeatured,
			UserId: request.body.chUserId,
			FlagMB: request.body.flagMB
		}, function(err, chdet){
			// console.log('Error : ', err);
			// console.log('ChDet : ');
			if(err)
				response.send(err);
			response.json(chdet);
		});
	}
	if ( request.body.freeflag == 1 )
	{
		church.create({
			ChurchId: request.body.ChurchId, ChurchName: request.body.ChurchName, ChurchDenomination: request.body.ChurchDenomination,
			ChurchPastor: request.body.ChurchPastor, ChurchAddress: request.body.ChurchAddress, ChurchArea: request.body.ChurchArea, ChurchPincode: request.body.chPincode
		}, function(err, churches){
			if(err)
				response.send(err);
			response.json(churches);
		});
	}
});


// Church Details DB search operations

application.get('/api/addchurch', function(request, response){

    console.log('2222');
    console.log(request.query.key);
    console.log(request.query.ker);
    console.log(request.query.kez);
    console.log(request.query.keu);
    console.log(request.query.keq);



            if( request.query.keu && request.query.keq)
            {
                console.log("hi 0");
//                response.sendfile("./search.html");


            }
else{
            if( request.query.key && request.query.kez && request.query.keu && request.query.keq && request.query.ker )
             {
                  console.log("hi 5");
                  church.find({ ChurchDenomination: {$in:request.query.key},ChurchLanguage: {$in:request.query.kez}, ChurchSplService: {$in:request.query.keq}, ChurchArea: {$in:request.query.ker}, ChurchService: {$in:request.query.keu} }, function(err, churches)    {
                       if (err)
                        response.send(err);
                        response.json(churches);
                     });
            }
else {
           if(request.query.key && request.query.kez && request.query.keu && request.query.ker)
           {
                console.log("hi 4");
                church.find({ ChurchDenomination: {$in:request.query.key}, ChurchLanguage:{$in:request.query.kez}, ChurchService: {$in:request.query.keu}, ChurchArea: {$id:request.query.ker }}, function(err, churches)
                   {
                      if(err)
                      response.send(err)
                      response.json(churches);
                    });
            }

else {
           if(request.query.key && request.query.kez && request.query.keq && request.query.ker)
            {
                 console.log("hi 4.1");
                 church.find( {ChurchSplService: {$in:request.query.keq}, ChurchDenomination: {$in:request.query.key}, ChurchLanguage:{$in:request.query.kez}, ChurchArea: {$in:request.query.ker} },function(err, churches)
                  {
                        if (err)
                        response.send(err)
                        response.json(churches);
                  });
            }
else {

           if(request.query.key && request.query.kez && request.query.keu)
            {
                 console.log("hi 3.1");
                 church.find({ ChurchDenomination: {$in:request.query.key},ChurchLanguage: {$in:request.query.kez},ChurchService: {$in:request.query.keu}} , function(err, churches)
                 {
                         if(err)
                         response.send(err)
                         response.json(churches);
                 }) ;
            }

else {

            if(request.query.key && request.query.kez && request.query.ker)
            {
                   console.log("hi 3.2");
                   church.find({ ChurchDenomination: {$in:request.query.key}, ChurchLanguage: {$in:request.query.kez}, ChurchArea: {$in:request.query.ker}} , function(err, churches)
                     {
                                if(err)
                                 response.send(err)
                                 response.json(churches);
                     });

            }

else{
            if(request.query.kez && request.query.keu && request.query.ker)
            {
                     console.log("hi 3.3");
                     church.find({ ChurchLanguage: {$in:request.query.kez}, ChurchService: {$in:request.query.keu}, ChurchArea: {$in:request.query.ker}} , function(err, churches)
                     {
                               if(err)
                                response.send(err)
                                response.json(churches);
                     });
            }

else{

           if(request.query.key && request.query.keu && request.query.ker)
            {
                    console.log("hi 3.4");
                    church.find( { ChurchDenomination: {$in:request.query.key}, ChurchService: {$in:request.query.kez}, ChurchArea: {$in:request.query.ker}} ,function(err, churches)
                    {

                              if (err)
                               response.send(err)
                               response.json(churches); // return all churches in JSON format
                    });
            }

else{
            if(request.query.key && request.query.kez && request.query.keq)
            {
                     console.log("hi 3.5");
                    church.find( {ChurchDenomination: {$in:request.query.key}, ChurchLanguage: {$in:request.query.kez}, ChurchSplService: {$in:request.query.keq }},function(err, churches)
                        {
                             if (err)
                               response.send(err)
                               response.json(churches);

                        });
            }
else{
           if(request.query.key && request.query.keq && request.query.ker)
            {

                    console.log("hi  3.6");
                    church.find({ ChurchDenomination: {$in:request.query.key}, ChurchSplService: {$in:request.query.keq}, ChurchArea: {$in:request.query.ker}}, function(err, churches)
                        {
                             if(err)
                              response.send(err)
                              response.json(churches);
                       });
            }
else{

           if(request.query.kez && request.query.keu && request.query.ker)
           {
                    console.log("hi  3.7");
                    church.find({ ChurchLanguage: {$in:request.query.kez}, ChurchService: {$in:request.query.keu}, ChurchArea: {$in:request.query.ker}}, function(err, churches)
                    {
                              if(err)
                               response.send(err)
                               response.json(churches);
                    });
           }
else{

          if(request.query.key && request.query.kez)
          {
                   console.log("hi  2.1");
                   church.find({ ChurchDenomination: {$in:request.query.key}, ChurchLanguage: {$in:request.query.kez}}, function(err, churches)
                   {
                               if(err)
                                response.send(err)
                                response.json(churches);
                   });
          }

else{

          if(request.query.key && request.query.keu)
          {
                  console.log("hi   2.2");
                  church.find({ ChurchDenomination: {$in:request.query.key}, ChurchService: {$in:request.query.keu}}, function(err, churches)
                  {
                               if(err)
                                response.send(err)
                                response.json(churches);
                  });
          }

else{

           if(request.query.key && request.query.keq)
            {
                    console.log("hi  2.3");
                    church.find({ ChurchDenomination: {$in:request.query.key}, ChurchSplService: {$in:request.query.keq}}, function(err, churches)
                    {

                               if(err)
                                response.send(err)
                                response.json(churches);
                    });
            }
else{

            if(request.query.key && request.query.ker)
            {
                     console.log("hi 2.4");
                     church.find({ ChurchDenomination: {$in:request.query.key}, ChurchArea: {$in:request.query.ker}}, function(err, churches)
                     {

                               if(err)
                               response.send(err)
                               response.json(churches);
                     });
            }
else{
            if(request.query.kez && request.query.keu)
            {
                      console.log(" hi  2.5");
                      church.find({ ChurchLanguage: {$in:request.query.kez}, ChurchService: {$in:request.query.keu}},  function(err, churches)
                      {

                               if(err)
                                response.send(err)
                                response.json(churches);
                      });
            }
else{
            if(request.query.kez && request.query.keq)
            {
                     console.log("hi 2.6");
                     church.find({ ChurchLanguage: {$in:request.query.kez}, ChurchSplService: {$in:request.query.keq}}, function(err, churches)
                     {
                                if(err)
                                response.send(err)
                                response.json(churches);

                     });
            }
else{
            if(request.query.kez && request.query.ker)
            {
                     console.log("hi  2.7");
                     church.find({ ChurchLanguage:{$in:request.query.kez}, ChurchArea: {$in:request.query.ker}}, function(err, churches)
                     {
                                 if(err)
                                 response.send(err)
                                 response.json(churches);

                     });
            }
else{

             if(request.query.keu && request.query.ker)
             {

                       console.log("hi  2.8");
                       church.find({ ChurchService: {$in:request.query.keu} , ChurchArea: {$in:request.query.ker}}, function(err, churches)
                       {
                                 if(err)
                                 response.send(err)
                                 response.json(churches);
                       });
             }
else{

             if( request.query.keq && request.query.ker)
             {

                       console.log("hi  2.9");
                       church.find({ ChurchSplService: {$in:request.query.keq} , ChurchArea: {$in: request.query.ker}}, function(err, churches)
                       {
                                if(err)
                                response.send(err)
                                response.json(churches);
                       });
             }
else{
             if(request.query.key)
             {
                        console.log("hi 1.1", request.query.key);
//                      var key = request.query.key;
                        church.find({ ChurchDenomination: {$in:request.query.key}}, function(err, churches)
                        {
                                 if(err)
                                     { console.log('ERR -- ', err); response.send(err);}
                            else{response.json(churches); console.log('churches', churches);}
                        });
             }
else{
             if(request.query.kez)
             {
                        console.log("hi  1.2");
                        church.find({ ChurchLanguage: {$in:request.query.kez}}, function(err, churches)
                        {
                                   if(err)
                                    response.send(err)
                                    response.json(churches);

                        });
             }
else{
             if(request.query.keu)
             {
                        console.log("hi  1.3");
                        church.find({ ChurchService: {$in:request.query.keu}}, function(err, churches)
                        {
                                     if(err)
                                      response.send(err)
                                      response.json(churches);

                        });
             }
else{
              if(request.query.keq)
              {
                         console.log("hi  1.4");
                         church.find({ ChurchSplService: {$in:request.query.keq}}, function(err, churches)
                         {
                                      if(err)
                                       response.send(err)
                                       response.json(churches);
                         });

              }
else{
              if(request.query.ker)
              {
                          console.log(" hi  1.5");
                          church.find({ ChurchArea:{$in:request.query.ker}}, function(err, churches)
                          {
                                       if(err)
                                        response.send(err)
                                        response.json(churches);
                          });
}


}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});

application.get('/public/data.json', function(request, response) {
//  var todos = request.churches;

    church.find(function(err, churches) {
                if (err)
                    response.send(err)
                response.json(churches);
            });

});



//Get Church Records.
application.get('/api/listchurch', function(request, response){
util.log('Church Id', request.query.ChurchIds);
	if(request.query.ChurchIds)
		{
		util.log('Query Present');
			church.find({ChurchId:{$in:request.query.ChurchIds}}, function(err, churches){
				if(err)
					response.send(err);
				response.send(churches);
				console.log('Church Array', churches);
			});
		}
		if(request.query.Vid == 'true'){ util.log('No Query all Documents');
			church.find({ChurchVideo: {$ne: null}}, function(err, churches){
				if(err)
					response.send(err);
				response.json(churches);
			});
		}
		if (request.query === null)
		{
			util.log('Without any Query values');
			 church.find(function(err,churches){
			 	if(err)
			 		response.send(err);
			 	response.json(churches);
			 });
		}
});

application.get('/api/chview/single', function(request, response){
	church.find({ChurchId: request.query.ChurchId}, function(err, churches){
		if(err)
			response.send(err);
		response.json(churches);
	});
});
//application.get('/',function(request, response){
//	response.sendFile('index');
//});

//User details DB operations
application.post('/api/AddUsrDet', function(request, response){
//	console.log('Hello Inisde User Details');
//	console.log(request.body);
	if( request.body )
		{
			usr.create({
				UserId: request.body.UserId, UserName: request.body.UserName, UserEmail: request.body.UserEmail, UserPwd: request.body.UserPwd,
				ChurchId: request.body.ChurchId,
			}, function(err, users){
				if (err)
					response.send(err);
				response.json(users);
			});
		}else{console.log('No Value to insert in Db');}
});

application.get('/api/verifyusr', function(request, response){
	console.log('Query Value', request.query.UserId);
	if(request.query){
		// console.log('Inside if condition');
		usr.find({UserId: request.query.UserId}, function( err, usrs ){
			if(err)
				response.send(err);
			response.json(usrs);
		});
	}else console.log('Not an Exisisting ID');
});

// Advertisement DB operations
application.post('/api/addadvert', function(request, response){
	advert.create({
		AdvertId: request.body.AdvertId, AdvertTitle: request.body.AdvertTitle, AdvertContent: request.body.AdvertContent, AdvertPics: request.body.AdvertImage
	}, function(err, adverts){
		if(err)
			response.send(err);
		response.json(adverts);
	});
});

// Event DB Operations
application.get('/api/events',function(request, response) {
    //console.log("hi");
    Event.find(function(err, events){
        if(err)
             response.send(err)
             response.json(events);
    });
});

application.post('/api/events', function(request, response) {
 var target_path = '/upload/'+ request.body.target_path;
    //console.log(target_path);
    Event.create({EventTitle: request.body.eventtitle, ChurchId: request.body.churchid, EventId: request.body.eventid,
        EventContent:  request.body.eventcontent, EventImage: target_path, done : false
    }, function(err, events) {
        if(err)
            response.send(err);
        response.json(events);
    });
});

// Listening to server port.
application.listen(port, function(){
	console.log('Server running on port -->>>>> ' + port);
});
