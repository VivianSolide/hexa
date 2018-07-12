var express = require("express");
const City = require("../models/city");

var router = express.Router();
var fs = require("fs"),
	gm = require("gm").subClass({ imageMagick: true });
var Vibrant = require("node-vibrant");
var request = require("request");

router.get("/getpalette", function(req, res, next) {
	City.find({}).then(cities => {
		cities.forEach((city, i) => {
			gm(city.lastPhoto)
				.crop(500, 5, 0, 0)
				.write(`public/images/${city._id}.jpg`, err => {
					if (err) {
						console.log(err);
					} else {
						Vibrant.from(`public/images/${city._id}.jpg`)
							.getPalette()
							.then(colors => {
								let ts = JSON.parse(JSON.stringify(colors));
								City.findOneAndUpdate(
									{ dcId: cities[i].dcId },
									{ palette: ts },
									{ upsert: true, new: true }
								);
							})
							.catch(err => {
								console.log("error : ", err);
							});
					}
				});
		});
		res.send("work in progress!");
	});
});

router.get("/colors", (req, res, next) => {
	City.find({})
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			throm(err);
		});
});

module.exports = router;
