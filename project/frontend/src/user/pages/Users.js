import React from "react";

import UsersList from "../components/UsersList";

import "./Users.css";

const Users = () => {
    const USERS = [
        {id: 'u1', name: 'Max', image: 'https://play-lh.googleusercontent.com/vco-LT_M58j9DIAxlS1Cv9uvzbRhB6cYIZJS7ocZksWRqoEPat_QXb6fVFi77lciJZQ=w526-h296-rw', palces: '3'}
    ];
    return (
        <UsersList items={USERS}/>
    );
};

export default Users;