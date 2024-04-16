const express = require("express");
const recurringCampaignController = require("../controllers/recurringCampaignController");

const router = express.Router();

router.get("/", recurringCampaignController.getAllRecurringCampaign);
router.post("/", recurringCampaignController.createRecurringCampaign);
router.patch("/:id", recurringCampaignController.updateRecurringCampaign);
router.delete("/:id", recurringCampaignController.deleteRecurringCampaign);

module.exports = router;
