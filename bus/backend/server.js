const express = require("express");
const cors = require("cors");

const connectDB = require("./config/db");

const busRoutes = require("./routes/busRoutes");
const locationRoutes = require("./routes/locationRoutes");

const app = express();

app.use(cors());
app.use(express.json());

connectDB();

app.use("/api/bus", busRoutes);
app.use("/api/location", locationRoutes);

app.listen(5000, () => {
  console.log("Server running on port 5000");
});