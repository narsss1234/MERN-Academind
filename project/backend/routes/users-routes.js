const express = require('express');

const usersControllers = require('../controllers/users-controllers');

const usersRoutes = express.Router();

usersRoutes.get('/', usersControllers.getAllUsers);

usersRoutes.post('/signup', usersControllers.signup);

usersRoutes.post('/login', usersControllers.login);

module.exports = usersRoutes;