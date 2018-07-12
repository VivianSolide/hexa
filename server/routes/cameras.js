const express = require("express");
const router = express.Router();
const axios = require("axios");
const City = require("../models/city");

// Weekly?
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

			res.json(allCities);

			City.insertMany(allCities, (error, cities) => {
				if (error) {
					throw error;
				}
				console.log(cities);
			});
			res.json(allCities);
		})
		.catch(error => {
			console.log(error);
		});
});

// Each hour?
router.get("/getLastPhoto", (req, res, next) => {
	let promises = [];

	City.find({})
		.then(cities => {
			cities.forEach((element, i) => {
				promises.push(
					axios.get(`http://api.deckchair.com/v1/camera/${element.dcId}/images`)
				);
			});
			Promise.all(promises)
				.then(photos =>
					photos.forEach((photo, index) => {
						City.findByIdAndUpdate(cities[index]._id, {
							$set: {
								lastPhoto: `http://api.deckchair.com/v1/viewer/image/${
									photo.data.data[0]._id
								}`
							}
						}).then(citiesUpdated => res.json(citiesUpdated));
					})
				)

				.catch(err => console.log(err));
		})
		.catch(err => console.log(err));
});

module.exports = router;
