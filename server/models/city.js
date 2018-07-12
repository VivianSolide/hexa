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
		primary: {
			hexa: Array,
			percentage: Number
		},
		secondary: {
			hexa: String,
			percentage: Number
		},
		tertiary: {
			hexa: String,
			percentage: Number
		}
	}
});

const City = mongoose.model("City", citySchema);

module.exports = City;
