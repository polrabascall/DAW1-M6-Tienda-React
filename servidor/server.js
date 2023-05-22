const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;
const productRoutes = require('./productRoutes');
const mongoose = require('mongoose');

app.use(cors());
app.use(express.json());
app.use('/api', productRoutes);

// Example route to get all products
app.get('/api/products', (req, res) => {
  // Here you can perform the logic to retrieve all products from the database or any other data source
  const products = [ 
    {
      "id": 1,
      "title": "jaket large black",
      "description": "jaket make with exotic animal",
      "price": 25000,
      "rating": 4.69,
      "stock": 94,
      "brand": "lv",
      "category": "jackets",
      "thumbnail": "https://localhost/products/1/thumbnail.jpg",
      "images": [
        "https://localhost/products/1/1.jpg",
        "https://localhost/products/1/2.jpg",
        "https://localhost/products/1/3.jpg",
        "https://localhost/products/1/4.jpg",
        "https://localhost/products/1/thumbnail.jpg"
      ]
    },
    { id: 2, name: 'Product 2', price: 19.99 },
    { id: 3, name: 'Product 3', price: 7.99 },
  ];

  res.json(products);
});

// Example route to create a new product
app.post('/api/products', (req, res) => {
  // Here you can perform the logic to create a new product in the database or any other data source
  const newProduct = req.body; // Data of the new product sent from the frontend

  // Code to create the new product and save it to the database

  res.status(201).json(newProduct); // Return the newly created product as the response
});

// Example route to get a specific product by its ID
app.get('/api/products/:id', (req, res) => {
  const productId = req.params.id; // ID of the product sent from the frontend

  const product = { id: productId, name: 'Product 1', price: 10.99 };

  res.json(product);
});

// Configure the database connection
mongoose.connect('mongodb://localhost/products', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Successfully connected to the database'))
  .catch((error) => console.log('Database connection error:', error));

// Start the server
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
