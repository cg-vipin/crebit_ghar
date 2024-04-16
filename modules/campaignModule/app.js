const express = require("express");
const app = express();

const campaign = require("./routes/campaignRoutes");

// Routes
app.use("/campaign", campaign);

module.exports = app;
