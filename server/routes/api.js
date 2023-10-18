const express = require('express');
const router = express.Router();
const Brand = require('../models/Brands');

// Retrieve and filter/sort brands
router.get('/brands', async (req, res) => {
  try {
    let query = Brand.find({ published: true });

    if (req.query.filter) {
      query = query.where({ category: req.query.filter });
    }

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
    const { name, category, published } = req.body;

    const newBrand = new Brand({ name, category, published });
    await newBrand.save();

    res.status(201).json(newBrand);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Add routes for the Footer section (if not using a separate file)
router.get('/footer', (req, res) => {
  // Implement routes for the Footer section here
});

module.exports = router;
