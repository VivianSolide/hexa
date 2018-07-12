const mongoose = require("mongoose");

const citySchema = new mongoose.Schema({
	dcId: {
		type: String,
		required: [true, "The dcId is required"]
	},
	location: {
		loc: {
			coordinates: Array
		},
		locale: String,
		title: String
	},
	status: {
		type: Boolean,
		required: [true, "The status is required"]
	},
	lastPhoto: {
		type: String
	},
	link: {
		type: String
	},
	palette: {
		Vibrant: {
			_rgb: {
				type: Array
			},
			_population: {
				type: Number
			},
			_hsl: {
				type: Array
			}
		},
		LightVibrant: {
			_rgb: {
				type: Array
			},
			_population: {
				type: Number
			},
			_hsl: {
				type: Array
			}
		},
		DarkVibrant: {
			_rgb: {
				type: Array
			},
			_population: {
				type: Number
			},
			_hsl: {
				type: Array
			}
		},
		Muted: {
			_rgb: {
				type: Array
			},
			_population: {
				type: Number
			},
			_hsl: {
				type: Array
			}
		},
		LightMuted: {
			_rgb: {
				type: Array
			},
			_population: {
				type: Number
			},
			_hsl: {
				type: Array
			}
		},
		DarkMuted: {
			_rgb: {
				type: Array
			},
			_population: {
				type: Number
			},
			_hsl: {
				type: Array
			}
		}
	}
});

const City = mongoose.model("City", citySchema);

module.exports = City;
