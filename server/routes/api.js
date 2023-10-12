const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');

// Retrieve and filter/sort brands
router.get('/brands', async (req, res) => {
  try {
    let query = Brand.find({ published: true });

    // Filter by specific criteria if provided in the request
    if (req.query.filter) {
      query = query.where({ category: req.query.filter });
    }

    // Sort the results by name (or other criteria if needed)
    if (req.query.sort === 'name') {
      query = query.sort('name');
    } else if (req.query.sort === 'published') {
      query = query.sort('published');
    }

    const brands = await query.exec();
    res.json(brands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
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
