const express = require("express");
const router = express.Router();

const { getLocation } = require("../controllers/locationController");

router.get("/:busNumber", getLocation);

module.exports = router;