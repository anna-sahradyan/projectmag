import React from 'react';
import s from "../../components/Cart/Cart.module.css";
import {NavLink} from "react-router-dom";
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { purple } from '@mui/material/colors';

const EmptyWishList = () => {

    const ColorButton = styled(Button)(({ theme }) => ({
        color: theme.palette.getContrastText(purple[500]),
        backgroundColor: purple[500],
        '&:hover': {
            backgroundColor: purple[700],
        },
    }));
    return (
        <>
            <div className={s.contentDivWish}>
                <div className={s.contentWish}>
                    <div className={s.emptyWishList}>
                        <h1>WishList is Empty</h1>
                        <h6>Your wishlist is empty, You have not chosen anything</h6>
                        <div className={s.wishImg} ><img src="/images/wish.jpg" width={400}style={{border: "3px solid #e4e4e450",
                            boxShadow: "0 2px 5px #a3a3a3"}} alt=""/> </div>
                        <div className={`${s.emptyBtnWish}`}>
                            <NavLink to={`/`}> <ColorButton variant="contained">Back to Home Page </ColorButton></NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default EmptyWishList;