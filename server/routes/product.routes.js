const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/product.controllers');

// get all products
router.route('/products').get(ProductController.getProducts);
router.route('/products/:id').get(ProductController.getSingleProduct);
module.exports = router;