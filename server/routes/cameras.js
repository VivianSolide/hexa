const express = require("express");
const router = express.Router();
const axios = require("axios");

// Endpoint: http://api.deckchair.com/v1/cameras

router.get("/getcameras", (req, res, next) => {
	axios
		.get("http://api.deckchair.com/v1/cameras")
		.then(function(response) {
			res.jsonp(response.data);
		})
		.catch(function(error) {
			console.log(error);
		});
});

module.exports = router;
