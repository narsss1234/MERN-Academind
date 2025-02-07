const express = require('express');

const { check } = require('express-validator');

const placesControllers = require('../controllers/places-controllers');

const placesRouter = express.Router();

placesRouter.get('/:pid', placesControllers.getPlaceById);

placesRouter.get('/user/:uid', placesControllers.getPlaceByUid);

placesRouter.post('/', [check('title').not().isEmpty(), check('description').isLength({min: 5}), check('address').not().isEmpty()], placesControllers.createPlace);

placesRouter.patch('/:pid', [check('title').not().isEmpty(), check('description').isLength({min: 5})], placesControllers.updatePlace);

placesRouter.delete('/:pid', placesControllers.deletePlace);

module.exports = placesRouter;