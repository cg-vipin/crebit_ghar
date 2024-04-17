const validateCampaign = (campaignSchema) => (req, res, next) => {
  const { error, value } = campaignSchema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  req.type = value.type;
  next();
};

module.exports = validateCampaign;
