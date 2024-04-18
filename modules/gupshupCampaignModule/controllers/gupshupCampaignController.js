const gupshupCampaignService = require("../services/gupshupCampaignServices");

const getAllGupshupCampaign = async (req, res) => {
  try {
    const gupshupCampaign =
      await gupshupCampaignService.getAllGupshupCampaign();
    res.json(gupshupCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const createGupshupCampaign = async (req, res) => {
  const { type } = req.body;
  try {
    const newGupshupCampaign =
      await gupshupCampaignService.createGupshupCampaign(type);
    res.status(201).json(newGupshupCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const updateGupshupCampaign = async (req, res) => {
  const { id } = req.params;

  const data = req.body;
  try {
    const updatedGupshupCampaign =
      await gupshupCampaignService.updateGupshupCampaign(id, data);
    res.json(updatedGupshupCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const deleteGupshupCampaign = async (req, res) => {
  const { id } = req.params;

  try {
    await gupshupCampaignService.deleteGupshupCampaign(id);
    return res.json({
      message: "Campaign deleted successfully",
      campaignId: id,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

module.exports = {
  getAllGupshupCampaign,
  createGupshupCampaign,
  updateGupshupCampaign,
  deleteGupshupCampaign,
};
