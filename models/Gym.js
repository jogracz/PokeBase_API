const { Sequelize, DataTypes } = require('sequelize');
const config = require('config');

const pgURI = config.get('pgURI');

const sequelize = new Sequelize(pgURI);

const Gym = sequelize.define('gym',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  badge: {
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
//     await Gym.sync();
//     console.log("The Gym model was just synchronized!");
//   } catch (error) {
//     console.error('Unable to sync the model', error);
//   }
// }

// synchronize();

module.exports = Gym;