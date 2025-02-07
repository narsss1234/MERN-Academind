const HttpError = require('../models/http-error');
const {v4: uuidv4} = require('uuid');

const USERS = [
    {
        id: 'u1', 
        name: 'Max', 
        image: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw', 
        palces: '1',
        email: 'test1@test.com',
        password: 'testers1'
    },
    {
        id: 'u2', 
        name: 'Min', 
        image: 'https://plus.unsplash.com/premium_photo-1673829957061-e98aae665ead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D', 
        palces: '1',
        email: 'test2@test.com',
        password: 'testers2'
    }
];

const getAllUsers = (req, res, next) => {
    res.status(200).json({users: USERS})
};

const signup = (req, res, next) => {
    const {name, email, password} = req.body;

    const createdUser = {
        id: uuidv4(),
        name: name,
        email: email,
        password: password
    }

    USERS.push(createdUser);

    res.status(201).json({user: createdUser});

};

const login = (req, res, next) => {
    const {email, password} = req.body;

    const identifiedUser = USERS.find(u => u.email === email);
    if(!identifiedUser || identifiedUser.password !== password) {
        throw new HttpError('Could not identify user, credentials seem to be wrong', 401);
    }

    res.status(201).json({message: 'Logged in!'});
};

exports.getAllUsers = getAllUsers;
exports.signup = signup;
exports.login = login;