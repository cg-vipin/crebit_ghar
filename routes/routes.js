const express = require("express");
const router = express.Router();

// Define route objects
const routes = [
    { path: "/campaign", route: require("../modules/campaignModule/routes/campaignRoutes") },
    { path: "/campaignType", route: require("../modules/campaignTypeModule/routes/campaignTypeRoutes") },
    { path: "/gupshupCampaign", route: require("../modules/gupshupCampaignModule/routes/gupshupCampaignRoutes") },
    { path: "/recurringCampaign", route: require("../modules/recurringCampaignModule/routes/recurringCampaign") },
    { path: "/leads", route: require("../modules/segementModule/routes/leadRoutes") },
    { path: "/segments", route: require("../modules/segementModule/routes/segmentRoutes") }
];

// Register routes
routes.forEach(({ path, route }) => {
    router.use(path, route);
});

module.exports = router;
