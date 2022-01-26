const { Router } = require('express');
const ProfileService = require('../services/ProfileService');

module.exports = Router().post('/', async (req, res, next) => {
  try {
    const profile = await ProfileService.create(req.body);

    res.json(profile);
  } catch (err) {
    next(err);
  }
});
