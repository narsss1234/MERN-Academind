import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
    const USERS = [
        {id: 'u1', name: 'Max', image: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw', palces: '1'},
        {id: 'u2', name: 'Min', image: 'https://plus.unsplash.com/premium_photo-1673829957061-e98aae665ead?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8dGFraW5nJTIwcGhvdG98ZW58MHx8MHx8fDA%3D', palces: '1'}
    ];
    return (
        <UsersList items={USERS}/>
    );
};

export default Users;