
const express = require('express');
const router = express.Router();
const mongoose = require('mongoose')
const userController = require('../controllers/userController')


//LOGIN ROUTES

//route
router.get('/login', userController.login_get)

//Authentication - POST
router.post('/login', userController.login_post)


//REGISTER ROUTES

//route
router.get('/register', userController.register_get)

//Registration new user - POST
router.post('/register', userController.register_post)


//LOGOUT ROUTE
router.get('/logout', userController.logout_get)

module.exports = router;