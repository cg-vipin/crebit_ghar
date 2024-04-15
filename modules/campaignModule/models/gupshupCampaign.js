const sequelize = require("sequelize");
const db = require("../../../config/database");

const gupshupCampaign = db.define("gupshupCampaign", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  campaign_id: sequelize.INTEGER,
  file_path: sequelize.STRING,
  status: sequelize.STRING,
  timestamp: sequelize.DATE,
  transaction_id: sequelize.STRING,
  response: sequelize.STRING,
  success_no: sequelize.INTEGER,
  fail_no: sequelize.INTEGER,
  duplicates_no: sequelize.INTEGER,
  campaign_type: sequelize.STRING,
  createdDate: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  updatedDate: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  createdBy: sequelize.INTEGER,
  updatedBy: sequelize.INTEGER,
});

module.exports = gupshupCampaign;
