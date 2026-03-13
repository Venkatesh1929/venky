const Bus = require("../models/Bus");

exports.loginBus = async (req, res) => {

  const { busNumber, route } = req.body;

  const bus = await Bus.findOne({ busNumber, route });

  if (bus) {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }

};