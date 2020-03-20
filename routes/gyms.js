const express = require('express');
const router = express.Router();
const Gym = require('../models/Gym');

// @route     GET at /api/gyms
// @desc      GET all gyms
router.get('/', async (req, res) => {
  const gyms = await Gym.findAll();
  
  res.send(`All Gyms: ${JSON.stringify(gyms)}`)
})

// @route     GET at /api/gyms/:id
// @desc      GET a gyms
router.get('/:id', async (req, res) => {
  const id = req.params.id;
  res.send(`Get a Gym}`)
})

module.exports = router;