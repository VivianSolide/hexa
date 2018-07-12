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
		cities.forEach((element, i) => {
			gm(element.lastPhoto)
				.crop(500, 120, 150, 250)
				.write(`public/images/${element._id}.jpg`, err => {
					if (err) {
						console.log(err);
					} else {
						Vibrant.from(`public/images/${element._id}.jpg`)
							.getPalette()
							.then(colors => {
								console.log("coloooooors", colors.Vibrant)
								// if (colors.Vibrant) {
								// 	City.findByIdAndUpdate(cities[i]._id, { palette: { primary: {$push: {hexa: colors.Vibrant.Swatch.rgb}} } });
								// }
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
