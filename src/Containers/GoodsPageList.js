import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import GoodsPages from "../Pages/GoodsPages/GoodsPages";
import axios from "axios";
import {useParams} from "react-router-dom";
import {selectGoodsPages, getGoodsPagesSuccess, getRemoveGoodsPages} from "../store/goodsPagesSlice";
import s from "../Pages/GoodsPages/GoodsPages.module.css";
import {selectAllGoods} from "../store/allGoodsSlice";
import SimilarProducts from "../Pages/GoodsPages/SimilarProducts";
import {getIncrement} from "../store/cartSlice";
import {getIncrementWishList} from "../store/wishListSlice";



const GoodsPageList = () => {
    let allGoods = useSelector(selectAllGoods);
    const allCategory = [...new Set(allGoods.map((curElem) => curElem.category)), 'all'];
    const [itemCat, setItemCat] = useState(allGoods);
    const [filterCategory] = useState(allCategory);
    let {productId} = useParams();
    const products = useSelector(selectGoodsPages);
    const dispatch = useDispatch();


    const fetchProductDetail = async () => {
        const response = await axios.get(`https://60d8b48beec56d0017477462.mockapi.io/allGoods?articul=${productId}`)
            .catch(err => {
                console.log('Error', err)
            });

        dispatch(getGoodsPagesSuccess(response.data));

    }


    useEffect(() => {
        return ()=>{
            if (productId && productId !== ''){
                fetchProductDetail();
            }
            return () => {
                dispatch(getRemoveGoodsPages());
            }
        }


    }, []);

    const filterItem = (category) => {
        if (category === 'all') {
            setItemCat(allGoods);
            return;
        }
        const updateItems = allGoods.filter((curElem) => {
            return curElem.category === category;
        });
        setItemCat(updateItems);


    }
    const clickHandler = (e) => {
        e.preventDefault();
        let t = e.target;
        if (!t.classList.contains('add-to-cart')) return true;
        dispatch(getIncrement(t.getAttribute('data-key')));


    }
    const clickHandlerToWishList = (e) => {
        e.preventDefault();
        let t = e.target;
        if (!t.classList.contains('wish-list')) return true;
        dispatch(getIncrementWishList(t.getAttribute('data-key')));

    }

    return (
        <div>
            <div className={s.contentPage}>
                <div className={s.containerPage}>
                    <div onClick={clickHandler}>
                        {products.map((item, index) => <GoodsPages key={`${item}_${index}`}
                                                                   proImages={item.proImages} title={item.title}
                                                                   articul={item.articul}
                                                                   description={item.description}
                                                                   data-key={item.articul} cost={item.cost}
                                                                   category={item.category}
                                                                   descriptionText={item.descriptionText}
                                                                   filterItem={filterItem}
                                                                   filterCategory={filterCategory} clickHandlerToWishList={clickHandlerToWishList}/>)
                        }


                    </div>
                    <div className={s.cardList}>
                        {itemCat.map((item, index) => {
                            return <SimilarProducts key={`${item}_${index}`} image={item.image}
                                                    sale={item.sale} heart={item.heart}
                                                    proImages={item.proImages}
                                                    zoomImages={item.zoomImages}
                                                    arrowsImages={item.arrowsImages}
                                                    overline={item.overline}
                                                    description={item.description}
                                                    articul={item.articul} title={item.title}
                                                    cost={item.cost}
                            />
                        })}

                    </div>
                </div>

            </div>

        </div>

    );
};
export default GoodsPageList;
