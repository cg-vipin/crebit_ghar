const express = require("express");
const campaignController = require("../controllers/campaignController");
const validate = require("../../../middleware/validation");
const campaignTypeSchema = require("../validation/campaignValidation");

const router = express.Router();

router.get("/", campaignController.getAllCampaign);
router.post(
  "/",
  validate(campaignTypeSchema.campaignSchema),

  campaignController.createCampaign
);
router.patch("/:id", validate(campaignTypeSchema.campaignUpdateSchema), campaignController.updateCampaign);
router.delete("/:id", campaignController.deleteCampaign);

module.exports = router;
