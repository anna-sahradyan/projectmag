import React from 'react';
import partFour from '../../Data/goodsArrFour.json';
import s from './PartFour.module.css';
import {NavLink} from "react-router-dom";

const PartFour = () => {
    return (
        <>

            <div className={s.contentDiv}>
                <div className={s.content}>

            {partFour.map((item,index)=>{
                return <div key={`${item}_${index}`} className={s.card}><NavLink to={item.NavLink}><img src={item.images} alt=""/></NavLink>
                    <p ><NavLink  className={s.title} to={item.NavLink}>{item.title}</NavLink></p>
                </div>

                }
                )}

            </div>
            </div>
        </>
    );
};

export default PartFour;