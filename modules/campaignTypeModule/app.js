const express = require("express");
const app = express();

const campaignTypeRoutes = require("./routes/campaignTypeRoutes");

// Routes
app.use("/campaignType", campaignTypeRoutes);

module.exports = app;
