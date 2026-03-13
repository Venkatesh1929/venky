const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema({
  busNumber: String,
  lat: Number,
  lng: Number
});

module.exports = mongoose.model("Location", locationSchema);