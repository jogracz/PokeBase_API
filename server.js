const express = require('express');

const app = express();

app.get('/', (req,res) => res.json({msg: 'Welcome to the PokeBase API'}));

// Define Routes
app.use('/api/gyms', require('./routes/gyms'));
app.use('/api/trainers', require('./routes/trainers'));
app.use('/api/pokemons', require('./routes/pokemons'));


const PORT = 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));