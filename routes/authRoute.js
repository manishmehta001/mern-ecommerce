const express = require('express');
const router = express.Router();
const authController = require('./../controller/authController');
const passport = require('passport');

router.route('/signup').post(authController.createUser);
router
  .route('/login')
  .post(passport.authenticate('local'), authController.loginUser);
router
  .route('/check')
  .get(passport.authenticate('jwt'), authController.checkAuth);
module.exports = router;
