const express = require("express");
const campaignController = require("../controllers/campaignController");

const router = express.Router();

router.get("/", campaignController.getAllCampaign);
router.post("/", campaignController.createCampaign);
router.patch("/:id", campaignController.updateCampaign);
router.delete("/:id", campaignController.deleteCampaign);

module.exports = router;
