const Joi = require("joi");

const gupshupCampaignSchema = Joi.object({
  campaign_id: Joi.number().integer().positive().required(),
  campaign_name: Joi.string().required(),
  file_path: Joi.string().required(),
  status: Joi.string().required(),
  timestamp: Joi.date().required(),
  transaction_id: Joi.string().required(),
  response: Joi.string().allow("", null),
  success_no: Joi.number().integer().min(0).default(0),
  fail_no: Joi.number().integer().min(0).default(0),
  duplicates_no: Joi.number().integer().min(0).default(0),
  campaign_type: Joi.string().required(),
  createdDate: Joi.date().iso(),
  updatedDate: Joi.date().iso(),
  createdBy: Joi.string(),
  updatedBy: Joi.string(),
});

const gupshupUpdateCampaignSchema = Joi.object({
  campaign_id: Joi.number().integer().positive(),
  campaign_name: Joi.string(),
  file_path: Joi.string(),
  status: Joi.string(),
  timestamp: Joi.date(),
  transaction_id: Joi.string(),
  response: Joi.string().allow("", null),
  success_no: Joi.number().integer().min(0).default(0),
  fail_no: Joi.number().integer().min(0).default(0),
  duplicates_no: Joi.number().integer().min(0).default(0),
  campaign_type: Joi.string(),
  createdDate: Joi.date().iso(),
  updatedDate: Joi.date().iso(),
  createdBy: Joi.string(),
  updatedBy: Joi.string(),
});

module.exports = {
  gupshupCampaignSchema,
  gupshupUpdateCampaignSchema
};
