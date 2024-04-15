const express = require("express");
const app = express();

const campaign = require("./routes/campaignRoutes");
const campaignTypeRoutes = require("./routes/campaignTypeRoutes");
const gupshupCampaignRoutes = require("./routes/gupshupCampaignRoutes");

// Routes
app.use("/campaigns", campaign);
app.use("/campaignTypes", campaignTypeRoutes);
app.use("/gupshupCampaigns", gupshupCampaignRoutes);

module.exports = app;
