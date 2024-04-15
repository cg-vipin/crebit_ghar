const express = require("express");
const gupshupCampaignController = require("../controllers/gupshupCampaignController");

const router = express.Router();

router.get("/", gupshupCampaignController.getAllGupshupCampaign);
router.post("/", gupshupCampaignController.createGupshupCampaign);
router.patch("/:id", gupshupCampaignController.updateGupshupCampaign);
router.delete("/:id", gupshupCampaignController.deleteGupshupCampaign);

module.exports = router;
