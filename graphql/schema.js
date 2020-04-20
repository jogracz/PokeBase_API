// GraphQl Types
const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql');

// DataBase Models
const Pokemon = require('../models/Pokemon');
const Trainer = require('../models/Trainer');
const Gym = require('../models/Gym');
const CaughtPokemon = require('../models/CaughtPokemon');
const SelectedPokemon = require('../models/SelectedPokemon');

/// Custom Types ///
// Pokemon
const PokemonType = new GraphQLObjectType({
  name: 'Pokemon',
  fields: () => ({
    id: {type: GraphQLNonNull(GraphQLInt)},
    name: {type:  GraphQLNonNull(GraphQLString)}
  })
})
// Trainer
const TrainerType = new GraphQLObjectType({
  name: 'Trainer',
  fields: () => ({
    id: {type:  GraphQLNonNull(GraphQLInt)},
    nickname: {type:  GraphQLNonNull(GraphQLString)},
    email: {type:  GraphQLNonNull(GraphQLString)},
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
})
// Gym
const GymType = new GraphQLObjectType({
  name: "Gym",
  fields: () => ({
    id: {type:  GraphQLNonNull(GraphQLInt)},
    name: {type:  GraphQLNonNull(GraphQLString)},
    badge: {type:  GraphQLNonNull(GraphQLString)}
  })
})
// CaughtPokemon
const CaughtPokemonType = new GraphQLObjectType({
  name: "CaughtPokemon",
  fields: ()=> ({
    id: {type:  GraphQLNonNull(GraphQLInt)},
    pokemon_id: {type:  GraphQLNonNull(GraphQLInt)},
    trainer_id: {type:  GraphQLNonNull(GraphQLInt)},
    pokemon_gender: {type: GraphQLString},
    pokemon_level: {type:  GraphQLNonNull(GraphQLInt)},
    date_caught: {type:  GraphQLNonNull(GraphQLString)},
    place_caught: {type:  GraphQLNonNull(GraphQLString)},
    pokemon_new_name: {type: GraphQLString},
    pokemon: {
      type:  GraphQLNonNull(PokemonType),
      resolve(parentValue){
        return Pokemon.findByPk(parentValue.pokemon_id)
      }
    },
    trainer: {
      type:  GraphQLNonNull(TrainerType),
      resolve(parentValue){
        return Trainer.findByPk(parentValue.trainer_id)
      }
    }
  })
})

// SelectedPokemon
const SelectedPokemonType = new GraphQLObjectType({
  name: "SelectedPokemon",
  fields: () => ({
    id: {type:  GraphQLNonNull(GraphQLInt)},
    caught_pokemon_id: {type:  GraphQLNonNull(GraphQLInt)},
    trainer_id: {type:  GraphQLNonNull(GraphQLInt)},
    pokemon_order: {type:  GraphQLNonNull(GraphQLInt)},
    caught_pokemon: {
      type:  GraphQLNonNull(CaughtPokemonType),
      resolve(parentValue){
        return CaughtPokemon.findByPk(parentValue.caught_pokemon_id)
      }
    },
    trainer: {
      type:  GraphQLNonNull(TrainerType),
      resolve(parentValue){
        return Trainer.findByPk(parentValue.trainer_id)
      }
    }
  })
})

/// Root Query Type ///
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    pokemons: {
      type: new GraphQLList(PokemonType),
      resolve(){
         return Pokemon.findAll();
      }
    },
    pokemon: {
      type: PokemonType,
      args: {
        id: {type:  GraphQLNonNull(GraphQLInt)}
      },
      resolve(parentValue, args){
        return Pokemon.findByPk(args.id);
      }
    },
    trainers: {
      type: new GraphQLList(TrainerType),
      resolve(){
         return Trainer.findAll();
      }
    },
    trainer:{
      type: TrainerType,
      args: {
        id: {type:  GraphQLNonNull(GraphQLInt)}
      },
      resolve(parentValue, args){
        const trainer = Trainer.findByPk(args.id);
        return trainer;
      }
    },
    gyms: {
      type: new GraphQLList(GymType),
      resolve(){
         return Gym.findAll();
      }
    },
    gym: {
      type: GymType,
      args: {
        id: {type:  GraphQLNonNull(GraphQLInt)}
      },
      resolve(parentValue, args){
        return Gym.findByPk(args.id)
      }
    },
    caught_pokemons: {
      type: new GraphQLList(CaughtPokemonType),
      resolve(){
        return CaughtPokemon.findAll()
      }
    },
    caught_pokemon: {
      type: CaughtPokemonType,
      args: {
        id: {type: GraphQLNonNull(GraphQLInt)}
      },
      resolve(parentValue, args){
        return CaughtPokemon.findByPk(args.id)
      }
    },
    selected_pokemons: {
      type: new GraphQLList(SelectedPokemonType),
      resolve(){
        return SelectedPokemon.findAll()
      }
    },
    selected_pokemon: {
      type: SelectedPokemonType,
      args: {
        id: {type: GraphQLNonNull(GraphQLInt)}
      },
      resolve(parentValue, args){
        return SelectedPokemon.findByPk(args.id)
      }
    }
  })
  
})

module.exports = new GraphQLSchema({
  query: RootQuery
});