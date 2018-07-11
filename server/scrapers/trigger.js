const Scraper = require("./all");

var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/hexa";

MongoClient.connect(
	url,
	function(err, db) {
		if (err) throw err;
		db.db("hexa")
			.collection("cities")
			.find({})
			.toArray(function(err, result) {
				if (err) throw err;
				const scraper = new Scraper();
				for (let i = 0; i < 1; i++) {
					scraper.scrap(result[i].dcId, result[i].link);
					// console.log(result[i].dcId);
				}
				db.close();
			});
	}
);
