const Joi = require("joi");

const recurringCampaignSchema = Joi.object({
  campaign_ids: Joi.array().items(Joi.number().integer().positive()).required(),
  start_date: Joi.date().iso().required(),
  end_date: Joi.date().iso().required(),
});

const recurringUpdateCampaignSchema = Joi.object({
  campaign_ids: Joi.array().items(Joi.number().integer().positive()),
  start_date: Joi.date().iso(),
  end_date: Joi.date().iso(),
});

module.exports = { recurringCampaignSchema, recurringUpdateCampaignSchema };
