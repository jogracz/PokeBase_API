const express = require('express');
const router = express.Router();


// @route     GET at /api/trainers
// @desc      GET all trainers
router.get('/', (req, res) => {
  res.send('Gets all trainers')
})

// @route     GET at /api/trainers/:id
// @desc      GET a trainer
router.get('/:id', (req, res) => {
  res.send('Gets a trainer')
})

// @route     GET at /api/trainers/:id/pokemons
// @desc      GET specific trainer's pokemons
router.get('/:id/pokemons', (req, res) => {
  res.send('Gets trainer\'s pokemons')
})

module.exports = router;