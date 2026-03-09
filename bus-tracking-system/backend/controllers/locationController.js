const Location = require("../models/Location");

const updateLocation = async (req, res) => {
  try {
    const location = new Location(req.body);
    const savedLocation = await location.save();
    res.status(201).json(savedLocation);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getLocations = async (req, res) => {
  try {
    const locations = await Location.find().populate("busId");
    res.json(locations);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  updateLocation,
  getLocations
};