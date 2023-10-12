const express = require('express');
const router = express.Router();
const Brand = require('../models/Brand');

// Retrieve all brands (example)
router.get('/brands', async (req, res) => {
  try {
    const brands = await Brand.find({ published: true }).sort('name');
    res.json(brands);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
