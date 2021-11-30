import React from 'react';
import {NavLink} from "react-router-dom";
import '../../components/Header/header.css';

const AccountIn = () => {

    return (
        <div>
            <NavLink to={`/layout`}><button className={`btnLog btn btn-primary`}> Account</button></NavLink>


        </div>
    );
};

export default AccountIn;