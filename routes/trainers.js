const express = require('express');
const router = express.Router();
const {param, validationResult} = require('express-validator');
const Trainer = require('../models/Trainer');
const CaughtPokemon = require('../models/CaughtPokemon');
const SelectedPokemon = require('../models/SelectedPokemon');


// @route     GET at /api/trainers
// @desc      GET all trainers
router.get('/', async (req, res) => {
  try {
    const trainers = await Trainer.findAll();
    res.json({trainers});
  } catch (error) {
    res.json({error: 'Unable to retreat data'})
    console.log(error);
  }
})

// @route     GET at /api/trainers/:id
// @desc      GET a trainer
router.get('/:id', 
 param('id', 'Id must be a number').isNumeric(), async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }
  const id = req.params.id;
  try {
    const trainer = await Trainer.findByPk(id);
    const caughtPokemons = await CaughtPokemon.findAll({
      where: {
        trainer_id: id
      }
    });
    const selectedPokemons = await SelectedPokemon.findAll({
      where: {
        trainer_id: id
      }
    });
    res.json({
      trainer,
      numberOfCaughtPokemons: caughtPokemons.length,
      selectedPokemons
    });
  } catch(error) {
    res.json({error: 'Unable to retreat data'})
    console.log(error);
  }
})

// @route     GET at /api/trainers/:id/pokemons
// @desc      GET specific trainer's pokemons
router.get('/:id/pokemons', param('id', 'Id must be a number').isNumeric(), async (req, res) => {
  const errors = validationResult(req);
  if(!errors.isEmpty()) {
    return res.status(400).json({errors:errors.array()});
  }
  const id = req.params.id;
  try {
    const pokemons = await CaughtPokemon.findAll({
      where: {
        trainer_id: id
      }
    });
    res.json({pokemons})
  } catch (error) {
    res.json({error: 'Unable to retreat data'})
    console.log(error);
  }
})

module.exports = router;