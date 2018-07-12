var express = require("express");
const City = require("../models/city");

var router = express.Router();
var fs = require("fs"),
	gm = require("gm").subClass({ imageMagick: true });
var Vibrant = require("node-vibrant");
var request = require("request");

/* GET home page. */
router.get("/getpalette", function(req, res, next) {
	City.find({}).then(cities => {
		cities.forEach((city, i) => {
			gm(city.lastPhoto)
				.crop(500, 120, 150, 250)
				.write(`public/images/${city._id}.jpg`, err => {
					if (err) {
						console.log(err);
					} else {
						Vibrant.from(`public/images/${city._id}.jpg`)
							.getPalette()
							.then(colors => {
								if (colors) {
									let ts = JSON.parse(JSON.stringify(colors));
									// console.log("--------------------");
									// console.log(cities[i].dcId);
									// console.log("--------------------");
									// console.log(ts);
									// console.log("--------------------");

									City.findOneAndUpdate(
										{ dcId: cities[i].dcId },
										{
											palette: ts,
											status: true
										},
										{ upsert: true, new: true },
										function(err, city) {
											if (err) {
												console.log(err);
											} else {
												console.log(city);
											}
										}
									);

									// City.update(
									// 	{ dcId: "533c829d60a087e91766ef19" },
									// { status: false }
									// { new: true }
									// );
								}
							})
							.catch(err => {
								console.log("error : ", err);
							});
					}
				});
		});
	});
});

module.exports = router;
