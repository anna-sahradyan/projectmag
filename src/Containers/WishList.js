import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import FavoriteGoods from "../Pages/WishList/FavoriteGoods";
import s from "../Pages/WishList/FavoriteGoods.module.css";
import {selectAllGoods} from "../store/allGoodsSlice";
import EmptyWishList from "../Pages/WishList/EmptyWishList";
import {getRemoveWishList, selectWishList} from "../store/wishListSlice";
import {getIncrement} from "../store/cartSlice";



const WishList = () => {
    const allGoods = useSelector(selectAllGoods);
    const wishList = useSelector(selectWishList);
    const dispatch = useDispatch();

    const goodsObj = allGoods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;

    }, {});


    let elem = Object.keys(wishList).map(item => {
        return item;

    })


    const clickHandler = (e) => {
        e.preventDefault();
        let t = e.target;
        if (t.classList.contains('remove-item')) {
            dispatch(getRemoveWishList(t.getAttribute('data-key')));

        } else if (!t.classList.contains('add-to-cart')) return true;
        dispatch(getIncrement(t.getAttribute('data-key')));
        return false;
    }

    return (
        <>
            <>
                <div className={s.contentDiv}>
                    <div className={s.content}>
                        < div>
                            {elem.length !== 0 ? <div onClick={clickHandler}>
                                {Object.keys(wishList).map((item, index) => <FavoriteGoods key={`${item}_${index}`}
                                                                                           elem={wishList[item]}
                                                                                           title={goodsObj[item]['title']}
                                                                                           cost={goodsObj[item]['cost']}
                                                                                           articul={goodsObj[item]['articul']}
                                                                                           proImages={goodsObj[item]['proImages']}


                                />)}

                            </div> : <EmptyWishList/>}
                        </div>
                    </div>
                </div>
            </>
        </>
    );
};

export default WishList;