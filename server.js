const express = require('express');
const { Sequelize } = require('sequelize');
const Gym = require('./models/Gym');

const app = express();
const sequelize = new Sequelize('postgres://postgres:asia123@localhost:5432/poke_base');

// Connect and authenticate DB
const authenticateDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
}
authenticateDB();

app.get('/', (req,res) => res.json({msg: 'Welcome to the PokeBase API'}));

// Define Routes
app.use('/api/gyms', require('./routes/gyms'));
app.use('/api/trainers', require('./routes/trainers'));
app.use('/api/pokemons', require('./routes/pokemons'));




const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));