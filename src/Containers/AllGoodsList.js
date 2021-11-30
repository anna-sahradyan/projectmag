import React from 'react';
import Filter from "../Pages/FilterPage";
import s from '../Pages/FilterPage/FilterPage.module.css'
import {useSelector, useDispatch} from "react-redux";
import {fetchAllGoods} from "../redux/actions/response";
import {selectAllGoods} from "../store/allGoodsSlice";
//import GoodsLoadingBlock from "../components/GoodsPart1/GoodsLoadingBlock";
import { getIncrement} from "../store/cartSlice";
import {selectInputValue} from "../store/inputFilterSlice";
import {getIncrementWishList} from "../store/wishListSlice";





const AllGoodsList = () => {
    let dispatch = useDispatch();
    const allGoods = useSelector(selectAllGoods);
    //const loading = useSelector(selectAllGoods);
    const inputValue = useSelector(selectInputValue);

    let filterGoods = allGoods.filter(item => {
        if (inputValue && inputValue.length) {
            return item.category.toLowerCase().includes(inputValue.toLowerCase())
        }
        return item;

    });




    React.useEffect(() => {
        dispatch(fetchAllGoods())
    }, [dispatch]);


    const clickHandler = (e) => {
        e.preventDefault();
        let t = e.target;
        if (!t.classList.contains('add-to-cart')) return true;
        dispatch(getIncrement(t.getAttribute('data-key')));



    };
    const clickHandlerToWishList = (e) => {
        e.preventDefault();
        let t = e.target;
        if (!t.classList.contains('wish-list')) return true;
        dispatch(getIncrementWishList(t.getAttribute('data-key')));

    }




    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.container}>
                    <div className={s.cardList} onClick={clickHandler}>
                        {filterGoods.map(item => <Filter key={item.articul} image={item.image}
                                                         sale={item.sale} heart={item.heart}
                                                         proImages={item.proImages}
                                                         zoomImages={item.zoomImages}
                                                         arrowsImages={item.arrowsImages}
                                                         overline={item.overline}
                                                         description={item.description}
                                                         articul={item.articul} title={item.title} clickHandlerToWishList={clickHandlerToWishList}
                                                         cost={item.cost} item={item}

                        />)
                        }


                    </div>


                </div>
            </div>

        </>
    );
};

export default AllGoodsList;











