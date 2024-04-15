const express = require("express");
const campaignTypeRoutes = require("./routes/campaignTypeRoutes");
const app = express();

// Routes
app.use("/campaignTypes", campaignTypeRoutes);

module.exports = app;
