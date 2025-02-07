const express = require('express');
const { check } = require('express-validator');

const usersControllers = require('../controllers/users-controllers');

const usersRoutes = express.Router();

usersRoutes.get('/', usersControllers.getAllUsers);

usersRoutes.post('/signup', [check('name').not().isEmpty(), check('email').normalizeEmail().isEmail(), check('password').isLength({min: 6})], usersControllers.signup);

usersRoutes.post('/login', check('email').not().isEmpty(), check('password').not().isEmpty(), usersControllers.login);

module.exports = usersRoutes;