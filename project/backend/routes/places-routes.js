const express = require('express');

const placesControllers = require('../controllers/places-controllers');

const placesRouter = express.Router();

placesRouter.get('/:pid', placesControllers.getPlaceById);

placesRouter.get('/user/:uid', placesControllers.getPlaceByUid);

module.exports = placesRouter;