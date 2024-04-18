const RecurringCampaign = require("../models/recurringCampaign");

const getAllRecurringCampaign = async () => {
  try {
    const recurringCampaign = await RecurringCampaign.findAll();
    return recurringCampaign;
  } catch (error) {
    throw new Error("Error fetching campaign types: " + error.message);
  }
};

const createRecurringCampaign = async (type) => {
  try {
    return await RecurringCampaign.create({ type });
  } catch (error) {
    throw new Error("Error creating campaign type: " + error.message);
  }
};

const updateRecurringCampaign = async (id, updatedData) => {
  try {
    const campaign = await RecurringCampaign.findByPk(id);
    if (!campaign) {
      throw new Error("Campaign not found");
    }
    const updatedCampaign = await campaign.update(updatedData);
    return updatedCampaign;
  } catch (error) {
    throw new Error(`Failed to update campaign: ${error.message}`);
  }
};

const deleteRecurringCampaign = async (id) => {
  try {
    const recurringCampaign = await RecurringCampaign.findByPk(id);
    if (!recurringCampaign) {
      throw new Error("Campaign type not found");
    }
    await recurringCampaign.destroy();
    return { message: "Campaign type deleted successfully" };
  } catch (error) {
    throw new Error("Error deleting campaign type: " + error.message);
  }
};

module.exports = {
  getAllRecurringCampaign,
  createRecurringCampaign,
  updateRecurringCampaign,
  deleteRecurringCampaign,
};
