import React from 'react';
import s from './GoodsPart1.module.css';
import {NavLink} from "react-router-dom";



const GoodsPart1 = (props) => {


    return (
        <>
            <div className={s.card}>
                <img src={props.sale} alt="" className={s.sale} />
                <NavLink to={`#`}><img src={props.heart} alt="" className={`${s.heart} wish-list`}
                                       onClick={props.clickHandlerToWishList}data-key={props.articul} /></NavLink>

                <NavLink to={`/goods/${props.articul}`} className={s.productsImages} data-key={props.articul}>
                    <img src={props.proImages} alt=""/>
                </NavLink>
                <div className={s.productsHover}>
                    <NavLink to="" className={s.productsZoom}>
                        <img src={props.zoomImages} alt=""/>
                    </NavLink>
                    <NavLink to="">
                        <img src={props.arrowsImages} alt="" className={`productsImages`} data-key={props.articul}/>
                    </NavLink>
                    <NavLink to="" className={s.productsCart}>
                        <img src={props.cartImages} alt=""/>
                    </NavLink>

                </div>
                <p className={s.cost}>${props.cost} <span className={s.overline}>{props.overline}</span></p>
                <NavLink to="" className={s.description}>{props.description}</NavLink>
                <div className={s.articul}>
                    <NavLink to='/'>
                        <button className={` btn btn-primary add-to-cart ${s.addToCart}`} data-key={props.articul}
                        >Add
                            to cart
                        </button>
                    </NavLink>
                </div>

            </div>
        </>
    );
};

export default GoodsPart1;