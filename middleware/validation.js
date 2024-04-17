const validateCampaignType = (schema) => (req, res, next) => {
  const { error, value } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error: error.message });
  }
  req.body = value;
  next();
};

module.exports = validateCampaignType;
