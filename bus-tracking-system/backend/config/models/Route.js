const mongoose = require("mongoose");

const RouteSchema = new mongoose.Schema({
  routeName: {
    type: String,
    required: true
  },
  startLocation: {
    type: String,
    required: true
  },
  endLocation: {
    type: String,
    required: true
  },
  stops: [
    {
      type: String
    }
  ]
});

module.exports = mongoose.model("Route", RouteSchema);