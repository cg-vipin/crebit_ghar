const express = require("express");
const app = express();

const campaign = require("./routes/campaignRoutes");
const campaignTypeRoutes = require("./routes/campaignTypeRoutes");
const gupshupCampaignRoutes = require("./routes/gupshupCampaignRoutes");
const recurringCampaign = require("./routes/recurringCampaign");

// Routes
app.use("/campaigns", campaign);
app.use("/campaignTypes", campaignTypeRoutes);
app.use("/gupshupCampaigns", gupshupCampaignRoutes);
app.use("/recurringCampaigns", recurringCampaign);

module.exports = app;
