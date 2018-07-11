const express = require("express");
const router = express.Router();
const axios = require("axios");
const City = require("../models/city");

// Endpoint: http://api.deckchair.com/v1/cameras

router.get("/getcameras", (req, res, next) => {
	axios
		.get("http://api.deckchair.com/v1/cameras")
		.then(response => {
			let allCities = [];

			for (let i = 0; i < response.data.data.length; i++) {
				let oneCity = {};
				oneCity.dcId = response.data.data[i]._id;
				oneCity.location = response.data.data[i].location;
				oneCity.status = response.data.data[i].active;
				oneCity.link = response.data.data[i].rootEmbedUrl;
				allCities.push(oneCity);
			}

			
			City.insertMany(allCities, (error, cities) => {
				console.log("error", error);
				console.log("DEBUG cities", cities);
			});
			res.json(allCities);
		})
		.catch(error => {
			console.log(error);
		});
});

router.get("/getLastPhoto", (req, res, next) => {
	let promises = []

	City.find({}).then(cities => {
		cities.forEach((element, i) => {
			promises.push(axios.get(`http://api.deckchair.com/v1/camera/${element.dcId}/images`));

		})
		Promise.all(promises)
			.then(photos =>
				photos.forEach((photo, index) => {
					City.findByIdAndUpdate(cities[index]._id, { $set: { lastPhoto: `http://api.deckchair.com/v1/viewer/image/${photo.data.data[0]._id}` } })
						.then(citiesUpdated => res.json(citiesUpdated))

				}))

			.catch(err => console.log(err))

	})
		.catch(err => console.log(err))
});





module.exports = router;

// var express = require("express");
// var router = express.Router();
// var fs = require("fs"),
// 	gm = require("gm").subClass({ imageMagick: true });
// var Vibrant = require("node-vibrant");
// var request = require("request");

// /* GET home page. */
// router.get("/", function (req, res, next) {
// 	// resize and remove EXIF profile data
// 	// gm("public/images/yolo.jpg")
// 	gm("public/images/yolo.jpg")
// 		.crop(500, 120, 150, 250)
// 		.write("public/images/cropped.jpeg", err => {
// 			if (err) {
// 				console.log(err);
// 			} else {
// 				Vibrant.from("public/images/cropped.jpeg")
// 					.getPalette()
// 					.then(palette => {
// 						let colors = palette;
// 						console.log(colors);
// 						res.render("index", { colors });
// 					})
// 					.catch(err => {
// 						console.log("error : ", err);
// 					});
// 			}
// 		});
// });

// module.exports = router;
