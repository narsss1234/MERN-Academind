import React from 'react';

import PlaceList from '../components/PlaceList';

const UserPlaces = () => {
    const PLACES= [
        {id: 'p1', title: 'Mahabaleshwar', description: 'One of the most famous Hill Stations in Maharashtra', image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Elephant_head_Mahabaleshwar.jpg', address: 'MahabaleshwarMaharashtra 412806', location: {lat: '17.9307° N' ,long: '73.6477° E'}, creator: 'u1'},
        {id: 'p2', title: 'Mahabaleshwar', description: 'One of the most famous Hill Stations in Maharashtra', image: 'https://i.ytimg.com/vi/YElsXIpLEVo/maxresdefault.jpg', address: 'MahabaleshwarMaharashtra 412806', location: {lat: '17.9307° N' ,long: '73.6477° E'}, creator: 'u2'}
    ];
    return (
        <PlaceList items={PLACES} />
    );
};

export default UserPlaces;