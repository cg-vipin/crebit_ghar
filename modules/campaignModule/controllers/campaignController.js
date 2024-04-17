const campaignService = require("../services/campaignServices");

const getAllCampaign = async (req, res) => {
  try {
    const campaign = await campaignService.getAllCampaign();
    res.json(campaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const createCampaign = async (req, res) => {
  const { data } = req.body;
  try {
    const newCampaign = await campaignService.createCampaign(data);
    res.status(201).json(newCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const updateCampaign = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedCampaign = await campaignService.updateCampaign();
    res.json(updatedCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const deleteCampaign = async (req, res) => {
  const { id } = req.params;
  try {
    await campaignService.deleteCampaign(id);
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
  getAllCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
};
