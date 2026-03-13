const mongoose = require("mongoose");

const busSchema = new mongoose.Schema({
  busNumber: String,
  route: String
});

module.exports = mongoose.model("Bus", busSchema);