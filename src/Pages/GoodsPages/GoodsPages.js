import React, {useRef, useState} from 'react';
import s from "./GoodsPages.module.css";
import {NavLink} from "react-router-dom";
import ButtonCategory from "./ButtonCategory";



const GoodsPages = (props) => {
    let sortRef = useRef();
    const [sort, setSort] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        return setSort(!sort);

    }

    return (
        <>
            <div className={` sortDiv${s.sortDiv}`} onClick={handleClick}>
                {/*<Sort/>*/}
            </div>

            <div className={s.blockImgDes}>
                <div className={s.partImage}>
                    <img src={`/${props.proImages}`} alt={props.title}/>


                </div>

                {sort || (<div className={s.descriptionPage} ref={sortRef}>
                    <h2>{props.title}</h2>
                    <p className={s.pDesText}>{props.description}</p>
                    <p className={s.costP}>${props.cost}</p>


                </div>)}
            </div>
            {/*button part*/}
            <div className={`${s.btnList} `} >
                <div className={s.btnPage}>
                <NavLink to='/'>
                    <button className={`btn btn-primary `}>Home</button>
                </NavLink>

                <button className={` btn btn-primary add-to-cart ${s.addToCart}`} data-key={props.articul}>Add to
                    cart
                </button>
                <NavLink to='/'>
                    <button className={` btn btn-primary , wish-list`} data-key={props.articul} onClick={props.clickHandlerToWishList}>Add to
                        WishList
                    </button>
                </NavLink>
                </div>
                <ButtonCategory category={props.category} filterCategory={props.filterCategory}
                                filterItem={props.filterItem}/>

            </div>

            {/*   props.descriptionText*/}
            <div className={s.desText}>
                <h5>DESCRIPTION</h5>
                <p className={s.pDesText}>{props.descriptionText}</p>
            </div>
            <hr/>
            <h5>Similar products</h5>


        </>
    );
};

export default GoodsPages;