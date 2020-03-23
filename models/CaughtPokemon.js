const { Sequelize, DataTypes } = require('sequelize');
const config = require('config');

const pgURI = config.get('pgURI');

const sequelize = new Sequelize(pgURI);

const CaughtPokemon = sequelize.define('caught_pokemon',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  pokemon_id: {
    //reference pokemons
    type: DataTypes.INTEGER,
    allowNull: false
  },
  trainer_id: {
    //reference trainer
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pokemon_gender: {
    type: DataTypes.STRING
  },
  pokemon_level: {
    type: DataTypes.INTEGER,
    allowNull: false
  },
  date_caught: {
    type: DataTypes.DATE,
    allowNull: false
  },
  place_caught: {
    type: DataTypes.STRING,
    allowNull: false
  },
  pokemon_new_name: {
    type: DataTypes.STRING
  }
},
{
 timestamps: false
}
)

// const synchronize = async() => {
//   try {
//     await CaughtPokemon.sync();
//     console.log("The CaughtPokemon model was just synchronized!");
//   } catch (error) {
//     console.error('Unable to sync the model', error);
//   }
// }

// synchronize();

module.exports = CaughtPokemon;