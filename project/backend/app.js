const express = require('express');
const bodyParser = require('body-parser');
const HttpError = require('./models/http-error');

const placesRouter = require('./routes/places-routes');
const usersRoutes = require('./routes/users-routes');

const app = express();
const port = 5000;

app.use(bodyParser.json());

app.use('/api/places', placesRouter);

app.use('/api/users', usersRoutes);

app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
});

app.use((error, req,res,next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500);

    res.json({message: error.message || 'An unknown error occurred!'});
});

app.listen(port, (err) => {
    if(err){
        console.log('Encountered an issue while launching your application.');
        console.log(`Error encountered: ${err}`);
    } else {
        console.log(`The appication is running and started listening on port ${port}.`);
    }
});