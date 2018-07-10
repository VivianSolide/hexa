const Scraper = require("./all");
const City = require("../models/city");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/hexa";

MongoClient.connect(
	url,
	function(err, db) {
		if (err) throw err;
		var dbo = db.db("hexa");
		dbo
			.collection("cities")
			.find({})
			.toArray(function(err, result) {
				if (err) throw err;
				console.log(result);
				db.close();
			});
	}
);
