import React, {useState} from 'react';
import s from '../FilterPage/FilterPage.module.css';
import {useDispatch, useSelector} from "react-redux";
import {selectAllGoods} from "../../store/allGoodsSlice";
import {NavLink} from "react-router-dom";
import Typography from '@mui/material/Typography';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import {getIncrement, getMinus, getRemove} from "../../store/cartSlice";
import {getIncrementWishList} from "../../store/wishListSlice";


const PaginationList = () => {
    const [page, setPage] = useState(1);
    const allGoods = useSelector(selectAllGoods);
    const goodsPerPage = 5;
    const pagesVisited = page * goodsPerPage + 1;
    const dispatch = useDispatch();
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
        return ;

    }



    const displayGoods = allGoods.slice(pagesVisited, pagesVisited + goodsPerPage).map((item, index) => {

        return <div onClick={clickHandler}key={`${item}_${index}`}><div className={s.card} >

            <img src={item.sale} alt="" className={s.sale}/>
            <NavLink to={`/favoriteGoods`}><img src={item.heart} alt="" className= {` ${s.heart} wish-list`} onClick={clickHandlerToWishList}/></NavLink>
            <NavLink to={`/goods/${item.articul}`} className={s.productsImages}>
                <img src={item.proImages} alt=""/>
            </NavLink>
            <div className={s.productsHover}>
                <NavLink to="" className={s.productsZoom}>
                    <img src={item.zoomImages} alt=""/>
                </NavLink>
                <NavLink to="" className={s.productsDescription}>
                    <img src={item.arrowsImages} alt=""/>
                </NavLink>
                <NavLink to="" className={s.productsCart}>
                    <img src={item.cartImages} alt=""/>
                </NavLink>

            </div>
            <p className={s.cost}>${item.cost} <span className={s.overline}>{item.overline}</span>
            </p>
            <NavLink to="" className={s.description}>{item.description}</NavLink>
            <div className={s.articul}>
                <NavLink to='#'>
                    <button className={` btn btn-primary  add-to-cart ${s.addToCart}`}
                            data-key={item.articul}>Add
                        to cart
                    </button>
                </NavLink>


            </div>

        </div>
        </div>
    })
    const pageCount = Math.ceil(allGoods.length / goodsPerPage - 1);
    const handleChange = (event, value) => {
        event.preventDefault();
        setPage(value);


    }


    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.cardListPagination}>
                        {displayGoods}
                    </div>
                </div>
                <div className={s.paginateList}>
                    <Stack spacing={2}>
                        <Typography>Page:{page}</Typography>
                        <Pagination count={pageCount} page={page} color={`primary`} onChange={handleChange}/>
                    </Stack>

                </div>
            </div>


        </>
    );
};

export default PaginationList;