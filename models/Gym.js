const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:asia123@localhost:5432/poke_base');

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