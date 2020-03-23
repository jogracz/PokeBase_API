const { Sequelize, DataTypes } = require('sequelize');
const config = require('config');

const pgURI = config.get('pgURI');
const sequelize = new Sequelize(pgURI);

const SelectedPokemon = sequelize.define('selected_pokemon',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  caught_pokemon_id: {
    //reference caught_pokemons
    type: DataTypes.INTEGER,
    allowNull: false
  },
  trainer_id: {
    //reference trainer
    type: DataTypes.INTEGER,
    allowNull: false
  },
  pokemon_order: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
},
{
 timestamps: false
}
)

// const synchronize = async() => {
//   try {
//     await SelectedPokemon.sync();
//     console.log("The SelectedPokemon model was just synchronized!");
//   } catch (error) {
//     console.error('Unable to sync the model', error);
//   }
// }

// synchronize();

module.exports = SelectedPokemon;