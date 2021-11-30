import React, {useEffect} from 'react';
import s from '../Pages/FilterPage/FilterPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {selectSort} from "../store/sortSlice";
import {selectAllGoods} from "../store/allGoodsSlice";
import { fetchSortAllGoods} from "../redux/actions/response";
import {getIncrement, getMinus, getRemove} from "../store/cartSlice";
import {getIncrementWishList} from "../store/wishListSlice";
import Filter from "../Pages/FilterPage";


const SortPageList = () => {
    const sort = useSelector(selectSort);
    let allGoods = useSelector(selectAllGoods);
    let dispatch = useDispatch();
    useEffect(() => {
        return()=>{
            dispatch(fetchSortAllGoods(sort));
        }


    }, [sort]);
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
    const clickHandlerToWishList = (e) => {
        e.preventDefault();
        let t = e.target;
        if (!t.classList.contains('wish-list')) return true;
        dispatch(getIncrementWishList(t.getAttribute('data-key')));
        return;

    }

    return (
        <>
            <div className={s.sortDiv}>
                <div className={s.sortContext}>
                    <div className={s.box}>
                        {allGoods.map((item, index) => <div onClick={clickHandler} key={`${item}_${index}`}><Filter
                            image={item.image}
                            sale={item.sale} heart={item.heart}
                            proImages={item.proImages}
                            zoomImages={item.zoomImages}
                            arrowsImages={item.arrowsImages}
                            overline={item.overline}
                            description={item.description}
                            articul={item.articul} title={item.title}
                            cost={item.cost} item={item}
                            clickHandlerToWishList={clickHandlerToWishList}
                        /></div>)
                        }

                    </div>

                </div>
            </div>

        </>

    );
}


export default SortPageList;