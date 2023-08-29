const express = require('express');
const productBrandController = require('./../controller/brandController');
const router = express.Router();
router
  .route('/')
  .get(productBrandController.fetchBrands)
  .post(productBrandController.createBrand);

module.exports = router;
