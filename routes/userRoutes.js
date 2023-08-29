const express = require('express');
const router = express.Router();
const userController = require('./../controller/userController');

router.route('/own').get(userController.fetchUserById);
router.route('/:id').patch(userController.updateUser);

module.exports = router;
