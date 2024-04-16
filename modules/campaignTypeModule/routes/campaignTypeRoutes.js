const express = require("express");
const router = express.Router();
const campaignTypeController = require("../controllers/campaignTypeController");

router.get("/", campaignTypeController.getAllCampaignTypes);
router.post("/", campaignTypeController.createCampaignType);
router.patch("/:id", campaignTypeController.updateCampaignType);
router.delete("/:id", campaignTypeController.deleteCampaignType);

module.exports = router;
