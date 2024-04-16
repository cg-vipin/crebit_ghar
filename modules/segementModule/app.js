const express = require("express");
const app = express();

// Routes
const leadRoutes = require("./routes/leadRoutes");
const segmentRoutes = require("./routes/segmentRoutes");

// Routes
app.use("/leads", leadRoutes);
app.use("/segments", segmentRoutes);

module.exports = app;
