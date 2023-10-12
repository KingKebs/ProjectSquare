const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');

// Retrieve and filter/sort brands
router.get('/brands', async (req, res) => {
  // Your existing code to retrieve and filter/sort brands
});

// Add a new brand to the database
router.post('/brands', async (req, res) => {
  try {
    const { name, category, published } = req.body; // Assuming you send this data in the request body

    // Create a new brand
    const newBrand = new Brand({ name, category, published });
    await newBrand.save();

    res.status(201).json(newBrand); // Respond with the newly created brand
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
