import React from 'react';
import s from './PartTwo.module.css';
import goodsArrTwo from '../../Data/goodsArrTwo.json';
import {NavLink} from "react-router-dom";


const PartTwo = () => {
    return (
        <>

            <div className={s.contentDiv}>
                <div className={s.content}>
                    <h2><img src='/images/save.png' alt=""/>
                        Top Categories</h2>
                    {goodsArrTwo.map((item, index) => <div className={s.card} key={`${item}_${index}`}><NavLink
                        to='/'><img src={item.images} alt="" /></NavLink>


                    </div>)}


                </div>

            </div>
        </>
    );
};

export default PartTwo;