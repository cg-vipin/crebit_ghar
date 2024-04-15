const campaignService = require("../services/campaignServices");

const getAllCampaign = async (req, res) => {
  try {
    const campaignTypes = await campaignService.getAllCampaign();
    res.json(campaignTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const createCampaign = async (req, res) => {
  const { type } = req.body;
  try {
    const newCampaignType = await campaignService.createCampaign(type);
    res.status(201).json(newCampaignType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const updateCampaign = async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
  try {
    const updatedCampaignType = await campaignService.updateCampaign(id, type);
    res.json(updatedCampaignType);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const deleteCampaign = async (req, res) => {
  const { id } = req.params;
  try {
    await campaignService.deleteCampaign(id);
    res.json({ message: "Campaign deleted successfully", campaignId: id });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

module.exports = {
  getAllCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
};
