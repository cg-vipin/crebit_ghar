const express = require("express");
const router = express.Router();
const campaignTypeController = require("../controllers/campaignTypeController");
const validateCampaign = require("../../../middleware/validation");
const { campaignTypeSchema } = require("../validation/campaignTypeValidation");

router.get("/", campaignTypeController.getAllCampaignTypes);
router.get("/:id", campaignTypeController.getCampaignTypeById);
router.post(
  "/",
  validateCampaign(campaignTypeSchema),
  campaignTypeController.createCampaignType
);
router.patch(
  "/:id",
  validateCampaign(campaignTypeSchema),
  campaignTypeController.updateCampaignType
);
router.delete("/:id", campaignTypeController.deleteCampaignType);

module.exports = router;
