const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/pspk_web');

const Movie = require('./models/Movie');

// Seed some data if empty
app.get('/api/movies', async (req, res) => {
  const movies = await Movie.find();
  res.json(movies);
});

app.listen(5000, () => console.log("Server active on Port 5000"));