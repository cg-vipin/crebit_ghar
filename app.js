const express = require("express");
const bodyParser = require("body-parser");
const db = require("./config/database");

const app = express();
const PORT = 3000;

const campaign = require("./modules/campaignModule/app");
const campaignType = require("./modules/campaignTypeModule/app");
const gupshupCampaign = require("./modules/gupshupCampaignModule/app");
const recurringCampaign = require("./modules/recurringCampaignModule/app");
const segement = require("./modules/segementModule/app");

// Database
db.sync()
  .then(() => {
    console.log("Connection to database has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

// Middleware
app.use(bodyParser.json());

// Routes
app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/", campaign);
app.use("/", campaignType);
app.use("/", gupshupCampaign);
app.use("/", recurringCampaign);
app.use("/", segement);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
