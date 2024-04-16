const recurringCampaignService = require("../services/recurringCampaignServices");

const getAllRecurringCampaign = async (req, res) => {
  try {
    const recurringCampaign =
      await recurringCampaignService.getAllRecurringCampaign();
    res.json(recurringCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const createRecurringCampaign = async (req, res) => {
  const { type } = req.body;
  try {
    const newRecurringCampaign =
      await recurringCampaignService.createRecurringCampaign(type);
    res.status(201).json(newRecurringCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const updateRecurringCampaign = async (req, res) => {
  const { id } = req.params;
  try {
    const updatedRecurringCampaign =
      await recurringCampaignService.updateRecurringCampaign();
    res.json(updatedRecurringCampaign);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" + error });
  }
};

const deleteRecurringCampaign = async (req, res) => {
  const { id } = req.params;

  try {
    await recurringCampaignService.deleteRecurringCampaign(id);
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
  getAllRecurringCampaign,
  createRecurringCampaign,
  updateRecurringCampaign,
  deleteRecurringCampaign,
};
