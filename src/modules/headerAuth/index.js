import React from 'react';
import '../../components/Header/header.css';
import {useSelector} from "react-redux";
import {selectUsername} from "../../store/userSlice";
import AccountIn from "../account/AccountIn";
import AccountOut from "../account/AccountOut";


const HeaderAuth = () => {
    const userName = useSelector(selectUsername);
    let user = userName.username;
    console.log(user);

    return (
        <>
            <div className={`sectionGuest my-3`}>
                <div className={`profile`}>
                    <h5>Welcome:{user}</h5>
                    {user==='Guest'?(<AccountOut/>):<AccountIn/>}

                </div>

            </div>


        </>
    );
};

export default HeaderAuth;