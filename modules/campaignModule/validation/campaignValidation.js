const Joi = require("joi");

const campaignSchema = Joi.object({
  bankId: Joi.number().integer().positive(),
  dataSetId: Joi.number().integer().positive(),
  segmentId: Joi.number().integer().positive(),
  statusId: Joi.number().integer().positive(),
  campaignTypeId: Joi.number().integer().positive(),
  name: Joi.string().required(),
  description: Joi.string(),
  campaignSchedule: Joi.string().required(),
  scheduleType: Joi.string().required(),
  scheduleDate: Joi.date().iso(),
  delivered: Joi.number().integer().min(0),
  clicked: Joi.number().integer().min(0),
  login: Joi.number().integer().min(0),
  startDate: Joi.date().iso(),
  endDate: Joi.date().iso(),
  createdDate: Joi.date().iso(),
  updatedDate: Joi.date().iso(),
  createdBy: Joi.string(),
  updatedBy: Joi.string(),
});

module.exports = campaignSchema;
