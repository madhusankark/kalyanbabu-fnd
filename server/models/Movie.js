const mongoose = require('mongoose');
const MovieSchema = new mongoose.Schema({
  title: String,
  releaseYear: String,
  genre: String
});
module.exports = mongoose.model('Movie', MovieSchema);