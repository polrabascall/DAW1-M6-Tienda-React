const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const axios = require('axios');

// Route to get all products
router.get('/products', (req, res) => {
  axios
    .get('https://localhost/products')
    .then((response) => {
      res.status(200).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Error retrieving products' });
    });
});

// Route to create a new product
router.post('/products', (req, res) => {
  const newProduct = {
    title: req.body.title,
    price: req.body.price,
    description: req.body.description,
  };

  axios
    .post('https://localhost/products', newProduct)
    .then((response) => {
      res.status(201).json(response.data);
    })
    .catch((error) => {
      console.error(error);
      res.status(500).json({ error: 'Error creating the product' });
    });
});

// Other routes and controllers for updating and deleting products

// Define the product schema
const productSchema = new mongoose.Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  description: { type: String },
});

// Create the Product model based on the schema
const Product = mongoose.model('Product', productSchema);

// Route to get all products
router.get('/products', (req, res) => {
  // Logic to retrieve products from the database would go here
  // You can use an ORM or a database connection library here
  // For example, using Mongoose for MongoDB:
  Product.find({}, (err, products) => {
    if (err) {
      console.log(err);
      res.status(500).send('Server error');
    } else {
      res.status(200).json(products);
    }
  });
});
