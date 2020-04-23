// GraphQl Types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLList
} = require('graphql');

// DataBase Models
const CaughtPokemon = require('../../models/CaughtPokemon');
const SelectedPokemon = require('../../models/SelectedPokemon');

// Custom Types
const CaughtPokemonType = require('./CaughtPokemonType');
const SelectedPokemonType = require('./SelectedPokemonType');

// Trainer Type
const TrainerType = new GraphQLObjectType({
  name: 'Trainer',
  fields: () => ({
    id: {type: GraphQLInt},
    nickname: {type: GraphQLString},
    email: {type: GraphQLString},
    country: {type: GraphQLString},
    city: {type: GraphQLString},
    street_name: {type: GraphQLString},
    street_number: {type: GraphQLString},
    postcode: {type: GraphQLString},
    caught_pokemons: {
      type: new GraphQLList(CaughtPokemonType),
      resolve(parentValue){
        return CaughtPokemon.findAll({
          where: {
            trainer_id : parentValue.id
          }
        });
      }
    },
    selected_pokemons: {
      type: new GraphQLList(SelectedPokemonType),
      resolve(parentValue){
        return SelectedPokemon.findAll({
          where: {
            trainer_id: parentValue.id
          }
        });
      }
    }
  })
});

module.exports = TrainerType;
