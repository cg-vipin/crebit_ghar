const GupshupCampaign = require("../models/gupshup_campaign");

const getAllGupshupCampaign = async () => {
  try {
    const gupshupCampaign = await GupshupCampaign.findAll();
    return gupshupCampaign;
  } catch (error) {
    throw new Error("Error fetching campaign types: " + error.message);
  }
};

const createGupshupCampaign = async (type) => {
  try {
    return await GupshupCampaign.create({ type });
  } catch (error) {
    throw new Error("Error creating campaign type: " + error.message);
  }
};

const updateGupshupCampaign = async () => {};

const deleteGupshupCampaign = async (id) => {
  try {
    const gupshupCampaign = await GupshupCampaign.findByPk(id);
    if (!gupshupCampaign) {
      throw new Error("Campaign type not found");
    }
    await gupshupCampaign.destroy();
    return { message: "Campaign type deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting campaign type: " + error.message);
  }
};

module.exports = {
  getAllGupshupCampaign,
  createGupshupCampaign,
  updateGupshupCampaign,
  deleteGupshupCampaign,
};
