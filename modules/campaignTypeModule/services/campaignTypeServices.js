const CampaignType = require("../models/campaignType");

const getAllCampaignTypes = async () => {
  try {
    const campaignTypes = await CampaignType.findAll();
    return campaignTypes;
  } catch (error) {
    throw new Error("Error fetching campaign types: " + error.message);
  }
};

const getCampaignTypeById = async (id) => {
  try {
    const campaignTypes = await CampaignType.findByPk(id);
    if (!campaignTypes) {
      throw new Error("Campaign type not found");
    }
    return campaignTypes;
  } catch (error) {
    throw new Error("Error fetching campaign types: " + error.message);
  }
};

const createCampaignType = async (type) => {
  try {
    return await CampaignType.create({ type });
  } catch (error) {
    throw new Error("Error creating campaign type: " + error.message);
  }
};

const updateCampaignType = async (id, updatedData) => {
  try {
    const campaign = await CampaignType.findByPk(id);
    if (!campaign) {
      throw new Error('Campaign not found');
    }
    const updatedCampaign = await campaign.update(updatedData);
    return updatedCampaign;
  } catch (error) {
    throw new Error(`Failed to update campaign: ${error.message}`);
  }
};

const deleteCampaignType = async (id) => {
  try {
    const campaignType = await CampaignType.findByPk(id);
    if (!campaignType) {
      throw new Error("Campaign type not found");
    }
    await campaignType.destroy();
    return { message: "Campaign type deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting campaign type: " + error.message);
  }
};

module.exports = {
  getAllCampaignTypes,
  getCampaignTypeById,
  createCampaignType,
  updateCampaignType,
  deleteCampaignType,
};
