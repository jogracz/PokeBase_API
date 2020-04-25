const express = require('express');
const router = express.Router();
const {param, validationResult} = require('express-validator');
const Gym = require('../models/Gym');
const cache = require('express-redis-cache')();

// @route     GET at /api/gyms
// @desc      GET all gyms
router.get('/', cache.route(), async (req, res) => {
  const gyms = await Gym.findAll();
  res.json({gyms})
})

// @route     GET at /api/gyms/:id
// @desc      GET a gyms
router.get('/:id', cache.route(),
  param('id', 'Id must be a number').isNumeric(), async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }
  const id = req.params.id;
  const gym = await Gym.findByPk(id)
  res.json({gym});
})

module.exports = router;