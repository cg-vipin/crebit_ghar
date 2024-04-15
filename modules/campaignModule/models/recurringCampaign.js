const sequelize = require("sequelize");
const db = require("../../../config/database");

const recurringCampaign = db.define("recurring_campaign", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  campaign_ids: {
    type: sequelize.ARRAY(DataTypes.INTEGER),
  },
  start_date: {
    type: sequelize.DATE,
  },
  end_date: {
    type: sequelize.DATE,
  },
});

module.exports = recurringCampaign;
