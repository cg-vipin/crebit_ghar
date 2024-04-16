const express = require("express");
const app = express();

const gupshupCampaignRoutes = require("./routes/gupshupCampaignRoutes");

// Routes
app.use("/gupshupCampaign", gupshupCampaignRoutes);

module.exports = app;
