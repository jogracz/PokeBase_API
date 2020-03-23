const express = require('express');
const router = express.Router();
const Pokemon = require('../models/Pokemon');
const {param, validationResult} = require('express-validator/check');

// @route     GET at /api/pokemons
// @desc      GET all pokemons
router.get('/', async (req, res) => {
  try {
    const pokemons = await Pokemon.findAll();
    res.json({pokemons});
  } catch (error) {
    res.json({error: 'Unable to retreat data'})
    console.log(error);
  }
})

// @route     GET at /api/pokemon/:id
// @desc      GET a pokemon
router.get('/:id',
 param('id', 'Id must be a number').isNumeric(), async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }
  const id = req.params.id;
  try {
    const pokemon = await Pokemon.findByPk(id)
    res.json({pokemon});
  } catch(error) {
    res.json({error: 'Unable to retreat data'})
    console.log(error);
  }
});

module.exports = router;

