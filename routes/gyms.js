const express = require('express');
const router = express.Router();

// @route     GET at /api/gyms
// @desc      GET all gyms
router.get('/', (req, res) => {
  res.send('Gets all gyms')
})

// @route     GET at /api/gyms/:id
// @desc      GET a gyms
router.get('/:id', (req, res) => {
  res.send('Gets a gyms')
})

module.exports = router;