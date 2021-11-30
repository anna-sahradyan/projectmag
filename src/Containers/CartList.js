import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getIncrement, getMinus, getRemove, selectCart} from "../store/cartSlice";
import Cart from "../components/Cart/Cart";
import {selectAllGoods} from "../store/allGoodsSlice";
import EmptyCart from "../components/Cart/EmptyCart";
import {getIncrementWishList} from "../store/wishListSlice";



const CartList = () => {
    const allGoods = useSelector(selectAllGoods);
    const cart = useSelector(selectCart);
    const dispatch = useDispatch();

    const goodsObj = allGoods.reduce((accum, item) => {
        accum[item['articul']] = item;
        return accum;

    }, {});


    let elem;
    let sum = Object.keys(cart).reduce((accum, item) => {
        elem = cart[item];
        console.log(cart[item])
        return accum += goodsObj[item]['cost'] * cart[item].toFixed(2);
    }, 0)


    const clickHandler = (e) => {
        e.preventDefault();
        let t = e.target;
        if (t.classList.contains('minus-item')) {
            dispatch(getMinus(t.getAttribute('data-key')));

        }

        if (t.classList.contains('remove-item')) {
            dispatch(getRemove(t.getAttribute('data-key')));
        }
        if (!t.classList.contains('add-to-cart')) return true;
        dispatch(getIncrement(t.getAttribute('data-key')));


    }
    useEffect(() => {
        JSON.parse(localStorage.getItem('cartItem'));

    }, []);
    const clickHandlerToWishList = (e) => {
        e.preventDefault();
        let t = e.target;
        if (!t.classList.contains('wish-list')) return true;
        dispatch(getIncrementWishList(t.getAttribute('data-key')));
        return ;

    }


    return (
        <>

            {elem ? <div onClick={clickHandler}>
                {Object.keys(cart).map((item, index) => <Cart sum={sum} key={`${item}_${index}`}
                                                              elem={cart[item]} title={goodsObj[item]['title']}
                                                              clickHandlerToWishList={clickHandlerToWishList}
                                                              cost={goodsObj[item]['cost']}
                                                              amount={goodsObj[item]['cost'] * cart[item]}
                                                              articul={goodsObj[item]['articul']}
                                                              proImages={goodsObj[item]['proImages']}

                />)}

            </div> : <EmptyCart/>}

            {/**/}
        </>
    );

};

export default CartList;
