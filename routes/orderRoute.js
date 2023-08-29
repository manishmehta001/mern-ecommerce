const express = require('express');
const router = express.Router();
const orderController = require('./../controller/orderController');

router
  .route('/')
  .get(orderController.fetchAllOrders)
  .post(orderController.createOrder);
router
  .route('/:id')
  .patch(orderController.updateOrder)
  .delete(orderController.deleteOrder);
router.route('/own/').get(orderController.fetchOrdersByUser);

module.exports = router;
