var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var secret = require('../config/config.json');
var userController = require('../controllers/userController');

router.post('/register',userController.register);
router.post('/',userController.login);
router.get('/protected', userController.protected);

module.exports = router;