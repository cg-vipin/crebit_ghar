const Campaign = require("../models/campaign");

const getAllCampaign = async () => {
  try {
    const campaign = await Campaign.findAll();
    return campaign;
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

const updateCampaign = async () => {};

const deleteCampaign = async (id) => {
  try {
    const campaign = await Campaign.findByPk(id);
    if (!campaign) {
      throw new Error("Campaign type not found");
    }
    await campaign.destroy();
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
