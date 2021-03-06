"use strict";

const mongoose = require("mongoose");
const mongoUri = process.env.MONGODB_URI;
console.log(mongoUri);

// connect to the database
mongoose.connect(mongoUri);

const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
	console.log(`Connected to the database (${mongoUri})`);
});
