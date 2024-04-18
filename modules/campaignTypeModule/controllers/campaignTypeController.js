const campaignTypeService = require("../services/campaignTypeServices");

const getAllCampaignTypes = async (req, res) => {
  try {
    const campaignTypes = await campaignTypeService.getAllCampaignTypes();
    return res.json(campaignTypes);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

const getCampaignTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const campaignType = await campaignTypeService.getCampaignTypeById(id);
    return res.json(campaignType);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

const createCampaignType = async (req, res) => {
  const data = req.body;
  try {
    const newCampaignType = await campaignTypeService.createCampaignType(data);
    return res.status(201).json(newCampaignType);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

const updateCampaignType = async (req, res) => {
  const { id } = req.params;
  const { type } = req.body;
  try {
    const updatedCampaignType = await campaignTypeService.updateCampaignType(
      id,
      type
    );
    return res.json(updatedCampaignType);
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

const deleteCampaignType = async (req, res) => {
  const { id } = req.params;
  try {
    await campaignTypeService.deleteCampaignType(id);
    return res.json({
      message: "Campaign deleted successfully",
      campaignId: id,
    });
  } catch (error) {
    console.error(error);
    return res.status(400).json({ message: error.message });
  }
};

module.exports = {
  getAllCampaignTypes,
  getCampaignTypeById,
  createCampaignType,
  updateCampaignType,
  deleteCampaignType,
};
