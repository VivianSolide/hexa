const Scraper = require("./all");

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
				let a = new Scraper(
					"533c829d60a087e91766ef19",
					"http://www.theparktowerknightsbridge.com/webcam"
				).scrap();
				console.log(a);
				db.close();
			});
	}
);
