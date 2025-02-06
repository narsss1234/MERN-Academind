const express = require('express');

const placesRouter = express.Router();

const DUMMY_PLACES = [
    {
        id: 'p1',
        title: 'Mahabaleshwar',
        description: 'One of the most famous Hill Stations in Maharashtra',
        image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Elephant_head_Mahabaleshwar.jpg',
        address: 'Mahabaleshwar Maharashtra 412806',
        location: {lat: '17.9307' ,long: '73.6477'},
        creator: 'u1'
    },
    {
        id: 'p2',
        title: 'Matheran',
        description: 'Hill Station in Maharashtra',
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Matheran_In_Clouds.jpg/799px-Matheran_In_Clouds.jpg',
        address: 'Matheran Maharashtra 410102',
        location: {lat: '18.9866' ,long: '73.2679'},
        creator: 'u2'
    }
];

placesRouter.get('/:pid', (req, res, next) => {
    const placeId = req.params.pid
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    
    if(!place) {
        res.sendStatus(404).json({message: 'Could not find a place for the provided id.'})
        return;
    } 
    res.json({place});
});

placesRouter.get('/user/:uid', (req,res,next) => {
    const userId = req.params.uid
    const place = DUMMY_PLACES.find(p => {
        return p.creator === userId;
    });

    if(!place) {
        res.sendStatus(404).json({message: 'Could not find a place for the provided id.'})
        return;
    } 
    res.json({place});
});

module.exports = placesRouter;