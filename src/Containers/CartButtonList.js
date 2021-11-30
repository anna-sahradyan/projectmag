import React from 'react';
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";
import {selectCart} from "../store/cartSlice";
import {selectAllGoods} from "../store/allGoodsSlice";
import IconButton from "@mui/material/IconButton";
import FavoriteIcon from "@mui/icons-material/Favorite";
import {selectWishList} from "../store/wishListSlice";
import '../components/Header/header.css';


const CartButtonList = () => {
    const allGoods = useSelector(selectAllGoods);
    const cart = useSelector(selectCart);
    let wishList = useSelector(selectWishList);
    const goodsObj = allGoods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;

    }, {});

    let total = Object.keys(cart).reduce((accum, item) => {
        return accum += goodsObj[item]['cost'] * cart[item];

    }, 0);

    let elem = Object.keys(cart).reduce((accum, item) => {
        return accum += cart[item];

    }, 0);


    let wishElem = Object.keys(wishList).reduce((accum, item) => {
        return accum += wishList[item];

    }, 0);
    return (
        <>
            <section className="  my-2 cartSection ">
                <div className="cart">
                    <div className="cartCount">
                        <span className="countSpan">{total.toFixed(2)}$</span>
                    </div>
                    <div className="cartSpan ">
                    <span className={`basket`}><NavLink to='/cart'><img src="/images/basket.png"
                                                   alt=""/></NavLink>{elem}</span>
                    </div>
                    <div className={`wishBtn`}>
                        <NavLink to={`/favoriteGoods`}> <IconButton aria-label=""
                                                                    color={`secondary`}
                        >
                            <FavoriteIcon/>
                        </IconButton>{wishElem}</NavLink>
                    </div>
                </div>

            </section>
            }
        </>
    );
};

export default CartButtonList;