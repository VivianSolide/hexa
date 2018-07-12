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
			Swatch: {
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
		},
		LightVibrant: {
			Swatch: {
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
		},
		DarkVibrant: {
			Swatch: {
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
		},
		Muted: {
			Swatch: {
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
		},
		LightMuted: {
			Swatch: {
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
		},
		DarkMuted: {
			Swatch: {
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
	}
});

const City = mongoose.model("City", citySchema);

module.exports = City;
