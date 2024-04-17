const campaignTypeService = require("../services/campaignTypeServices");

const getAllCampaignTypes = async (req, res) => {
  try {
    const campaignTypes = await campaignTypeService.getAllCampaignTypes();
    res.json(campaignTypes);
  } catch (error) {
    console.error(error);
    res.json({ message: "Server Error" + error });
  }
};

const getCampaignTypeById = async (req, res) => {
  const { id } = req.params;
  try {
    const campaignType = await campaignTypeService.getCampaignTypeById(id);
    res.json(campaignType);
  } catch (error) {
    console.error(error);
    res.json({ message: "Server Error" + error });
  }
};

const createCampaignType = async (req, res) => {
  const { type } = req.body;
  try {
    const newCampaignType = await campaignTypeService.createCampaignType(type);
    res.status(201).json(newCampaignType);
  } catch (error) {
    console.error(error);
    res.json({ message: "Server Error" + error });
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
    res.json(updatedCampaignType);
  } catch (error) {
    console.error(error);
    res.json({ message: error.message });
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
    res.json({ message: +error });
  }
};

module.exports = {
  getAllCampaignTypes,
  getCampaignTypeById,
  createCampaignType,
  updateCampaignType,
  deleteCampaignType,
};
