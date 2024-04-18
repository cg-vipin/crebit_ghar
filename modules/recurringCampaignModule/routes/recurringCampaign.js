const express = require("express");
const recurringCampaignController = require("../controllers/recurringCampaignController");
const validate = require("../../../middleware/validation");
const recurringCampaignSchema = require("../validation/recurringCampaignValidation");

const router = express.Router();

router.get("/", recurringCampaignController.getAllRecurringCampaign);
router.post(
  "/",
  validate(recurringCampaignSchema.recurringCampaignSchema),
  recurringCampaignController.createRecurringCampaign
);
router.patch(
  "/:id",
  validate(recurringCampaignSchema.recurringUpdateCampaignSchema),
  recurringCampaignController.updateRecurringCampaign
);
router.delete("/:id", recurringCampaignController.deleteRecurringCampaign);

module.exports = router;
