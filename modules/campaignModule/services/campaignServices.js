const Campaign = require("../models/campaign");

const getAllCampaign = async () => {
  try {
    const campaignTypes = await Campaign.findAll();
    return campaignTypes;
  } catch (error) {
    throw new Error("Error fetching campaign types: " + error.message);
  }
};

const createCampaign = async (type) => {
  try {
    return await Campaign.create({ type });
  } catch (error) {
    throw new Error("Error creating campaign type: " + error.message);
  }
};

const updateCampaign = async (id, type) => {
  try {
    const campaignType = await Campaign.findByPk(id);
    if (!campaignType) {
      throw new Error("Campaign type not found");
    }
    campaignType.type = type;
    await campaignType.save();
    return campaignType;
  } catch (error) {
    throw new Error("Error updating campaign type: " + error.message);
  }
};

const deleteCampaign = async (id) => {
  try {
    const campaignType = await Campaign.findByPk(id);
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
  getAllCampaign,
  createCampaign,
  updateCampaign,
  deleteCampaign,
};
