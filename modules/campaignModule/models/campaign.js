const sequelize = require("sequelize");
const db = require("../../../config/database");

const campaign = db.define("campaigns", {
  id: {
    type: sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  bankId: sequelize.INTEGER,
  dataSetId: sequelize.INTEGER,
  segmentId: sequelize.INTEGER,
  statusId: sequelize.INTEGER,
  campaignTypeId: sequelize.INTEGER,
  name: sequelize.STRING,
  description: sequelize.STRING,
  campaignSchedule: sequelize.STRING,
  scheduleType: sequelize.STRING,
  scheduleDate: sequelize.DATE,
  delivered: sequelize.INTEGER,
  clicked: sequelize.INTEGER,
  login: sequelize.INTEGER,
  startDate: sequelize.DATE,
  endDate: sequelize.DATE,
  createdDate: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
  updatedDate: {
    type: sequelize.DATE,
    defaultValue: sequelize.NOW,
  },
});

module.exports = campaign;
