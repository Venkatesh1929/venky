const Route = require("../models/Route");

const addRoute = async (req, res) => {
  try {
    const route = new Route(req.body);
    const savedRoute = await route.save();
    res.status(201).json(savedRoute);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getRoutes = async (req, res) => {
  try {
    const routes = await Route.find();
    res.json(routes);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  addRoute,
  getRoutes
};