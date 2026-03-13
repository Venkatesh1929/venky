const Location = require("../models/Location");

exports.getLocation = async (req, res) => {

  const bus = await Location.findOne({
    busNumber: req.params.busNumber
  });

  res.json(bus);

};