const express = require("express");
const app = express();

// Import routes
const routes = {
    campaign: "../modules/campaignModule/routes/campaignRoutes",
    campaignType: "../modules/campaignTypeModule/routes/campaignTypeRoutes",
    gupshupCampaign:
        "../modules/gupshupCampaignModule/routes/gupshupCampaignRoutes",
    recurringCampaign:
        "../modules/recurringCampaignModule/routes/recurringCampaign",
    leads: "../modules/segementModule/routes/leadRoutes",
    segments: "../modules/segementModule/routes/segmentRoutes",
};

// Register routes
Object.entries(routes).forEach(([path, route]) => {
    app.use(`/${path}`, require(route));
});

module.exports = app;
