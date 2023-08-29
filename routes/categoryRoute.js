const express = require('express');
const router = express.Router();
const productCategoryController = require('./../controller/categoryController');
router
  .route('/')
  .get(productCategoryController.fetchCategories)
  .post(productCategoryController.createCategory);

module.exports = router;
