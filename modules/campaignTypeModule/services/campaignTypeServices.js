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

const updateCampaignType = async (id, type) => {
  try {
    const [updatedRowsCount] = await CampaignType.update(
      { type: type },
      { where: { id: id } }
    );
    if (updatedRowsCount === 0) {
      throw new Error("Campaign type not found");
    }
    const updatedCampaignType = await CampaignType.findByPk(id);
    return updatedCampaignType;
  } catch (error) {
    throw new Error("Error updating campaign type: " + error.message);
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
