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
				.crop(500, 20, 0, 0)
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
								).then(final => res.json(final));
							})
							.catch(err => {
								console.log("error : ", err);
							});
					}
				});
		});
	});
});

router.get("/getcolors", (req, res, next) => {
	City.find({})
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			throw err;
		});
});

router.get("/getcolors/:cameraId", (req, res, next) => {
	let cameraId = req.params.cameraId;
	City.findById(cameraId)
		.then(data => {
			res.json(data);
		})
		.catch(err => {
			throm(err);
		});
});
module.exports = router;
