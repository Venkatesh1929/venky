const express = require("express");
const router = express.Router();

const { loginBus } = require("../controllers/busController");

router.post("/login", loginBus);

module.exports = router;