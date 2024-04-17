const Joi = require("joi");

const campaignTypeSchema = Joi.object({
  type: Joi.string().required(),
});

module.exports = {
  campaignTypeSchema,
};
