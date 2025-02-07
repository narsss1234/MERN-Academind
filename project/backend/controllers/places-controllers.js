const HttpError = require("../models/http-error");
const { v4: uuidv4 } = require('uuid');

let DUMMY_PLACES = [
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

const getPlaceById = (req, res, next) => {
    const placeId = req.params.pid
    const place = DUMMY_PLACES.find(p => {
        return p.id === placeId;
    });
    
    if(!place) {
        const error = new HttpError('Could not find a place for the provided id. ok?', 404);
        return next(error);
    } 
    res.json({place});
};

const getPlaceByUid = (req,res,next) => {
    const userId = req.params.uid
    const places = DUMMY_PLACES.filter(p => {
        return p.creator === userId;
    });

    if(!places) {
       const error = new HttpError('Could not find a place for the provided id. ok?', 404);
       throw error;
    } 
    res.json({places: places});
};

const createPlace = (req, res, next) => {
    const { title, description, image, address, coordinates, creator} = req.body;
    const createdPlace = {
        id: uuidv4(),
        title, 
        description, 
        image, 
        address, 
        location: coordinates, 
        creator
    };

    DUMMY_PLACES.push(createPlace);

    res.status(201).json({place: createdPlace})
};

const updatePlace = (req,res,next) => {
    const { title, description } = req.body;
    const placeId = req.params.pid;

    const updatedPlace = { ...DUMMY_PLACES.find(p => p.id === placeId)};
    const placeIndex = DUMMY_PLACES.findIndex(p => p.id === placeId);
    updatedPlace.title = title;
    updatedPlace.description = description;

    DUMMY_PLACES[placeIndex] = updatedPlace;

    res.status(200).json({place: updatedPlace});
};

const deletePlace = (req,res,next) => {
    const placeId = req.params.pid;
    DUMMY_PLACES = DUMMY_PLACES.filter(p => p.id !== placeId);

    res.status(200).json({message: 'Place is deleted.', place : DUMMY_PLACES})
};

exports.getPlaceById = getPlaceById;
exports.getPlaceByUid = getPlaceByUid;
exports.createPlace = createPlace;
exports.updatePlace = updatePlace;
exports.deletePlace = deletePlace;