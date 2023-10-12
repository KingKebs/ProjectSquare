const mongoose = require('mongoose');

const brandSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  category: String, // Modify to match your data structure
  published: {
    type: Boolean,
    default: true,
  },
});

const Brand = mongoose.model('Brand', brandSchema);

module.exports = Brand;
