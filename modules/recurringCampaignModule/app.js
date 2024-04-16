const express = require("express");
const app = express();

const recurringCampaign = require("./routes/recurringCampaign");

// Routes
app.use("/recurringCampaign", recurringCampaign);

module.exports = app;
