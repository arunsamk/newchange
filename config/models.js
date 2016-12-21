var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//Church Schema

var chdet= new Schema({
	ChurchId: { type: String, unique: true},
	ChurchName: String,
	ChurchDenomination: String,
	ChurchPastor: String,
	ChurchAddress: {StreetName: String, Suburb: String, City: String, State: String},
	ChurchLanguage: String,
	ChurchService: { Morning: {MTiming1: String, MTiming2: String}, Forenoon: {FTiming1: String, FTiming2: String}, Afternoon: {ATiming1: String, ATiming2: String}, Evening: {ETiming1: String, ETiming2: String}},
	ChurchSplService: {SPService1: String, SPService2: String, SPService3: String},
	ChurchContent: String,	
	ChurchPics: String,
	ChurchVideo: String,
	ChruchFeatured: String,
	UserId: String,
	FlagMB: Boolean,
});

var church = mongoose.model('churchdetails', chdet);

module.exports = {
	churchS: church,

	//Church Schema
	/*chdet: new Schema({
		ChurchId: { type: String, unique: true},
		ChurchName: String,
		ChurchDenomination: String,
		ChurchPastor: String,
		ChurchAddress: {StreetName: String, Suburb: String, City: String, State: String},
		ChurchLanguage: String,
		ChurchService: {Morning: {Timing1: String, Timing2: String, Timing3: String}, Afternoon: {Timing1: String, Timing2: String, Timing3: String}},
		ChurchSplService: { Service1: String, Service2: String},
		ChurchContent: String,	
		ChurchPics: String,
		ChurchVideo: String,
		ChruchFeatured: String,
		UserId: String,
		FlagMB: Boolean,
	}),*/

	//User Schema
	usrdet: new Schema({
		UserId: { type: String, unique: true },
		UserName: String,
		UserEmailId: String,
		UserPassword: String,
		ChurchId: String
	}),

	//Advertisement Schema
	advdet: new Schema({
		AdId: { type: String, unique: true },
		AdTitle: String,
		AdContent: String,
		AdPictures: String		
	}),

	//Event Schema
	eventdet: new Schema({
		EventId: { type: String, unique: true },
		EventTitle: String,
		EventContent: String,
		EventPictures: String,
		ChurchId: String		
	}),

	//StarRate Schema
	strratedet: new Schema({
		ChurchId: String,
		StarCount: String
	})
};