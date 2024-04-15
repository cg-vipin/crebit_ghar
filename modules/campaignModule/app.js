const express = require("express");
const app = express();

const campaign = require("./routes/campaignRoutes");
const campaignTypeRoutes = require("./routes/campaignTypeRoutes");

// Routes
app.use("/campaigns", campaign);
app.use("/campaignTypes", campaignTypeRoutes);

module.exports = app;
