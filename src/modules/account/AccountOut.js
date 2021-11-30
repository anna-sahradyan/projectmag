import React from 'react';
import '../../components/Header/header.css';
import {NavLink} from "react-router-dom";

const AccountOut = () => {

    return (
        <div>
            <NavLink to={`/register`}><button className={` btnLog btn btn-primary`}>Sign Up</button></NavLink>
        </div>
    );
};

export default AccountOut;