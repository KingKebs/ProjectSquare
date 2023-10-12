const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: String,
  published: Boolean,
});

module.exports = mongoose.model('Brand', brandSchema);
