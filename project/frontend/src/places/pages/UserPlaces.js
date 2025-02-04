import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

const PLACES= [
    {id: 'p1', title: 'Mahabaleshwar', description: 'One of the most famous Hill Stations in Maharashtra', image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Elephant_head_Mahabaleshwar.jpg', address: 'Mahabaleshwar Maharashtra 412806', location: {lat: '17.9307° N' ,long: '73.6477° E'}, creator: 'u1'},
    {id: 'p2', title: 'Matheran', description: 'Hill Station in Maharashtra', image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/43/Matheran_In_Clouds.jpg/799px-Matheran_In_Clouds.jpg', address: 'Matheran Maharashtra 410102', location: {lat: '18.9866°N' ,long: '73.2679°E'}, creator: 'u2'}
];

const UserPlaces = () => {
    const userId = useParams().userId;
    const loadedPlaces = PLACES.filter(place => place.creator === userId);
    return (
        <PlaceList items={loadedPlaces} />
    );
};

export default UserPlaces;