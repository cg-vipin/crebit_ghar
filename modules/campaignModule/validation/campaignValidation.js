const Joi = require("joi");

const campaignSchema = Joi.object({
  bankId: Joi.number().integer().positive().required(),
  dataSetId: Joi.number().integer().positive().required(),
  segmentId: Joi.number().integer().positive().required(),
  statusId: Joi.number().integer().positive().required(),
  campaignTypeId: Joi.number().integer().positive().required(),
  name: Joi.string().required().required(),
  description: Joi.string().required(),
  campaignSchedule: Joi.string().required(),
  scheduleType: Joi.string().required(),
  scheduleDate: Joi.date().iso().required(),
  delivered: Joi.number().integer().min(0).required(),
  clicked: Joi.number().integer().min(0).required(),
  login: Joi.number().integer().min(0).required(),
  startDate: Joi.date().iso().required(),
  endDate: Joi.date().iso().required(),
  createdDate: Joi.date().iso().required(),
  updatedDate: Joi.date().iso().required(),
  createdBy: Joi.string().required(),
  updatedBy: Joi.string().required(),
});

const campaignUpdateSchema = Joi.object({
  bankId: Joi.number().integer().positive(),
  dataSetId: Joi.number().integer().positive(),
  segmentId: Joi.number().integer().positive(),
  statusId: Joi.number().integer().positive(),
  campaignTypeId: Joi.number().integer().positive(),
  name: Joi.string(),
  description: Joi.string(),
  campaignSchedule: Joi.string(),
  scheduleType: Joi.string(),
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

module.exports = { campaignSchema, campaignUpdateSchema };
