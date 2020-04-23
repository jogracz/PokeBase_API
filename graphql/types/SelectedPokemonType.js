// GraphQl Types
const {
  GraphQLObjectType,
  GraphQLInt
} = require('graphql');

// DataBase Models
const Trainer = require('../../models/Trainer');
const CaughtPokemon = require('../../models/CaughtPokemon');

// Custom Types
const TrainerType = require('./TrainerType');
const CaughtPokemonType = require('./CaughtPokemonType');

// Selected Pokemon Type
const SelectedPokemonType = new GraphQLObjectType({
  name: "SelectedPokemon",
  fields: () => ({
    id: {type: GraphQLInt},
    caught_pokemon_id: {type: GraphQLInt},
    trainer_id: {type: GraphQLInt},
    pokemon_order: {type: GraphQLInt},
    caught_pokemon: {
      type: CaughtPokemonType,
      resolve(parentValue){
        return CaughtPokemon.findByPk(parentValue.caught_pokemon_id)
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

module.exports = SelectedPokemonType;
