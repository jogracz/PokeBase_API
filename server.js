const express = require('express');
const expressGraphQl = require('express-graphql');
const { Sequelize } = require('sequelize');
const config = require('config');
const schema = require('./graphql/schema');
const cache = require('express-redis-cache')();

const pgURI = config.get('pgURI');
const sequelize = new Sequelize(pgURI);
const app = express();

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

app.get('/', cache.route() , (req,res) => res.json({msg: 'Welcome to the PokeBase API'}));

// Define REST Routes
app.use('/api/gyms', require('./routes/gyms'));
app.use('/api/trainers', require('./routes/trainers'));
app.use('/api/pokemons', require('./routes/pokemons'));

// GraphQL Route
app.use('/graphql', expressGraphQl({
  schema,
  graphiql: true
}))


const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));