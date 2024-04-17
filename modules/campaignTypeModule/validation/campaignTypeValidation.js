const Joi = require("joi");

const campaignSchema = Joi.object({
  type: Joi.string().required(),
});

module.exports = campaignSchema;
