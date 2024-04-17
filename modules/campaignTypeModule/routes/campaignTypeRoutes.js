const express = require("express");
const router = express.Router();
const campaignTypeController = require("../controllers/campaignTypeController");
const validateCampaign = require("../../../middleware/campaignTypeValidation");
const campaignSchema = require("../../campaignTypeModule/validation/campaignTypeValidation");

router.get("/", campaignTypeController.getAllCampaignTypes);
router.post(
  "/",
  validateCampaign(campaignSchema),
  campaignTypeController.createCampaignType
);
router.patch("/:id", campaignTypeController.updateCampaignType);
router.delete("/:id", campaignTypeController.deleteCampaignType);

module.exports = router;
