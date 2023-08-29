const express = require('express');
const productController = require('./../controller/productController');
const router = express.Router();

router
  .route('/')
  .post(productController.createProduct)
  .get(productController.fetchAllProducts);
router
  .route('/:id')
  .get(productController.fetchProductById)
  .patch(productController.updateProduct);
module.exports = router;
