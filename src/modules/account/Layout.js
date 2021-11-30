import React from 'react';
import s from '../register/Register.module.css';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectUsername} from "../../store/userSlice";
import PaymentIcon from '@mui/icons-material/Payment';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LockOpenOutlinedIcon from '@mui/icons-material/LockOpenOutlined';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import {List} from '@material-ui/core';
import ListItemButton from "@mui/material/ListItemButton";
import {logOut} from "../register/Register";
import CartList from "../../Containers/CartList";


const Layout = () => {

    const userName = useSelector(selectUsername);


    return (
        <>
            <div className={s.contentDivLayout}>
                <div className={s.contentAccount}>
                    <div className={s.linkPage}>
                        <h4>My Account</h4>
                        <div className={s.linkList}>
                            <h5>Welcome:{userName.username}</h5>
                            <List>
                                <ListItemButton><PaymentIcon color={`primary`}
                                                             style={{marginTop: '-8px'}}/><NavLink
                                    to={`/cardList`}>checkout</NavLink></ListItemButton>
                                <ListItemButton><FavoriteIcon color={`secondary`}/><NavLink
                                    to={'/favoriteGoods'}>Favorites</NavLink>
                                </ListItemButton>
                                <ListItemButton><LockOpenOutlinedIcon color={`primary`}
                                                                      style={{marginTop: '-8px'}}/><NavLink
                                    to={'/layout'}>Change password</NavLink></ListItemButton>

                                <ListItemButton onClick={logOut}><LogoutRoundedIcon
                                    style={{marginTop: '-8px'}}/><NavLink to={'/home'}>Log
                                    Out</NavLink></ListItemButton>
                            </List>

                        </div>

                    </div>

                    <div className={s.cartPart}>
                        <CartList/>

                    </div>

                </div>
            </div>
        </>
    );
};

export default Layout;