const mongoose = require("mongoose");

const BusSchema = new mongoose.Schema({
  busNumber: {
    type: String,
    required: true
  },
  driverName: {
    type: String,
    required: true
  },
  route: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    default: 40
  }
});

module.exports = mongoose.model("Bus", BusSchema);