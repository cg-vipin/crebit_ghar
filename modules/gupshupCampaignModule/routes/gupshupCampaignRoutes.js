const express = require("express");
const gupshupCampaignController = require("../controllers/gupshupCampaignController");
const validate = require("../../../middleware/validation");
const gupshupCampaignSchema = require("../validation/gupshupCampaignValidation");

const router = express.Router();

router.get("/", gupshupCampaignController.getAllGupshupCampaign);
router.post(
  "/",
  validate(gupshupCampaignSchema),
  gupshupCampaignController.createGupshupCampaign
);
router.patch("/:id", gupshupCampaignController.updateGupshupCampaign);
router.delete("/:id", gupshupCampaignController.deleteGupshupCampaign);

module.exports = router;
