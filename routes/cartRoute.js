const express = require('express');
const router = express.Router();
const cartController = require('./../controller/cartController');

router
  .route('/')
  .get(cartController.fetchCartByUser)
  .post(cartController.addToCart);
router
  .route('/:id')
  .patch(cartController.updateCart)
  .delete(cartController.deleteFromCart);

module.exports = router;
