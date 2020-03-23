const { Sequelize, DataTypes } = require('sequelize');
const config = require('config');

const pgURI = config.get('pgURI');
const sequelize = new Sequelize(pgURI);

const Trainer = sequelize.define('trainer',{
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false
  },
  nickname: {
    type: DataTypes.STRING,
    allowNull: false
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false
  },
  country: {
    type: DataTypes.STRING
  },
  city: {
    type: DataTypes.STRING
  },
  street_name: {
    type: DataTypes.STRING
  },
  street_number: {
    type: DataTypes.STRING
  },
  postcode: {
    type: DataTypes.INTEGER
  }
},
{
 timestamps: false
}
)

// const synchronize = async() => {
//   try {
//     await Trainer.sync();
//     console.log("The Trainer model was just synchronized!");
//   } catch (error) {
//     console.error('Unable to sync the model', error);
//   }
// }

// synchronize();

module.exports = Trainer;