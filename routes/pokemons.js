const express = require('express');
const router = express.Router();

// @route     GET at /api/pokemons
// @desc      GET all pokemons
router.get('/', (req, res) => {
  res.send('Gets all pokemons')
})

// @route     GET at /api/pokemon/:id
// @desc      GET a pokemon
router.get('/:id', (req, res) => {
  res.send('Gets a pokemon')
})

module.exports = router;

