const express = require('express');

const placesRouter = express.Router();

placesRouter.get('/', (req, res, next) => {
    console.log('GET request in Places');
    res.json({message: 'It works!'});
});

module.exports = placesRouter;