// GraphQl Types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt
} = require('graphql');

// DataBase Models
const Pokemon = require('../../models/Pokemon');
const Trainer = require('../../models/Trainer');

// Custom Types
const PokemonType = require('./PokemonType');
const TrainerType = require('./TrainerType');

// Caught Pokemon Type
const CaughtPokemonType = new GraphQLObjectType({
  name: "CaughtPokemon",
  fields: ()=> ({
    id: {type: GraphQLInt},
    pokemon_id: {type: GraphQLInt},
    trainer_id: {type: GraphQLInt},
    pokemon_gender: {type: GraphQLString},
    pokemon_level: {type: GraphQLInt},
    date_caught: {type: GraphQLString},
    place_caught: {type: GraphQLString},
    pokemon_new_name: {type: GraphQLString},
    pokemon: {
      type: PokemonType,
      resolve(parentValue){
        return Pokemon.findByPk(parentValue.pokemon_id)
      }
    },
    trainer: {
      type: TrainerType,
      resolve(parentValue){
        return Trainer.findByPk(parentValue.trainer_id)
      }
    }
  })
});

module.exports = CaughtPokemonType;
