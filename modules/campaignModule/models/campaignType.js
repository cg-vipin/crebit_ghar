const sequelize = require("sequelize");
const db = require("../../../config/database");

const campaignType = db.define("campaignType", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  type: sequelize.STRING,
  createdDate: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  updatedDate: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
});

module.exports = campaignType;
