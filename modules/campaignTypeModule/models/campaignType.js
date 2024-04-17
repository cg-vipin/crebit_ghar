const sequelize = require("sequelize");
const db = require("../../../config/database");

const campaignType = db.define(
  "campaignType",
  {
    id: {
      type: sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    type: sequelize.STRING,
  },
  {
    timestamps: true,
  }
);

module.exports = campaignType;
