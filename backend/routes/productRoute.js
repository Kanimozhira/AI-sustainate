const express = require('express');
const router = express.Router();

const productDatabase = {
  Milk: {
    product_name: 'Milk',
    score: 7,
    breakdown: {
      carbon_footprint: 2,
      water_usage: 2,
      packaging: 1,
      certifications: 2,
    },
  },
  'Chocolate Bar': {
    product_name: 'Chocolate Bar',
    score: 5,
    breakdown: {
      carbon_footprint: 3,
      water_usage: 1,
      packaging: 0,
      certifications: 1,
    },
  },
  Rice: {
    product_name: 'Rice',
    score: 6,
    breakdown: {
      carbon_footprint: 1,
      water_usage: 3,
      packaging: 1,
      certifications: 1,
    },
  },
  Bread: {
    product_name: 'Bread',
    score: 6,
    breakdown: {
      carbon_footprint: 2,
      water_usage: 2,
      packaging: 1,
      certifications: 1,
    },
  },
  Tofu: {
    product_name: 'Tofu',
    score: 8,
    breakdown: {
      carbon_footprint: 1,
      water_usage: 1,
      packaging: 2,
      certifications: 4,
    },
  },
  'Almond Milk': {
    product_name: 'Almond Milk',
    score: 4,
    breakdown: {
      carbon_footprint: 3,
      water_usage: 0,
      packaging: 0,
      certifications: 1,
    },
  },
  Eggs: {
    product_name: 'Eggs',
    score: 6,
    breakdown: {
      carbon_footprint: 2,
      water_usage: 2,
      packaging: 1,
      certifications: 1,
    },
  },
  'Green Tea': {
    product_name: 'Green Tea',
    score: 7,
    breakdown: {
      carbon_footprint: 1,
      water_usage: 1,
      packaging: 2,
      certifications: 3,
    },
  },
  Coffee: {
    product_name: 'Coffee',
    score: 4,
    breakdown: {
      carbon_footprint: 3,
      water_usage: 1,
      packaging: 0,
      certifications: 0,
    },
  },
  Banana: {
    product_name: 'Banana',
    score: 9,
    breakdown: {
      carbon_footprint: 1,
      water_usage: 1,
      packaging: 2,
      certifications: 5,
    },
  },
};

router.get('/', (req, res) => {
  const nameQuery = req.query.name?.toLowerCase();
  const product = Object.values(productDatabase).find(
    (item) => item.product_name.toLowerCase() === nameQuery
  );

  if (product) {
    res.json(product);
  } else {
    res.status(404).json({ message: 'Product not found' });
  }
});

module.exports = router;
