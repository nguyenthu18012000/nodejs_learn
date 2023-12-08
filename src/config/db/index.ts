// const mongoose = require("mongoose");
import mongoose from "mongoose";

const connect = async () => {
	try {
		const connect = await mongoose.connect("mongodb://127.0.0.1:27017/test");
		console.log("connect");
	} catch (error) {
		console.log("false");
	}
};

module.exports = { connect };
