const { Sequelize, DataTypes } = require('sequelize');
const config = require('config');

const pgURI = config.get('pgURI');

const sequelize = new Sequelize(pgURI);

const Pokemon = sequelize.define('pokemon',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  }
},
{
 timestamps: false
}
)

// const synchronize = async() => {
//   try {
//     await Pokemon.sync();
//     console.log("The Pokemon model was just synchronized!");
//   } catch (error) {
//     console.error('Unable to sync the model', error);
//   }
// }

// synchronize();

module.exports = Pokemon;