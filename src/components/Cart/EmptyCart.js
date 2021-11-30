import React from 'react';
import s from "../Cart/Cart.module.css";
import {NavLink} from "react-router-dom";

const EmptyCart = () => {
    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.emptyBlock}>
                    <h1 >Cart is Empty</h1>
                    <h6>Your basket is empty, You have not chosen anything</h6>
                    <div className={s.emptyImg}><img src="/images/emptyCart.jpg"width={400} alt=""/></div>
                    <NavLink to='/'><button className={`${s.emptyBtn} btn btn-primary`}>Back to Home Page </button></NavLink>

                </div>
            </div>
            </div>
        </>
    );
};

export default EmptyCart;