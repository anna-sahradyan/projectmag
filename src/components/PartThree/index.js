import React from 'react';
import s from './PartThree.module.css';
import goodsArrThree from '../../Data/goodsArrThree.json';
import {NavLink} from "react-router-dom";


const PartThree = () => {
    return (
        <>

            <div className={s.contentDiv}>
                <div className={s.content}>
                    <h2><img src="/images/sun1.png" alt=""/>
                        Can't-Miss Deals + Steals</h2>
                    <div className={s.cardPart}>
                        {goodsArrThree.map((item, index) => <div key={`${item}_${index}`} className={s.card}>
                                <img src={item.images} alt="" className={s.contImage}/><span><img src={item.percent} alt=""
                                                                                                  className={s.pers}/></span>

                                <div className={s.description}>
                                    <h5>{item.description}</h5>
                                    <p className={s.titleTwo}>{item.descriptionP}</p>
                                    <span className={s.part}>                                   <NavLink to=""><img src={item.NavLinkI} alt=""/>{item.NavLink}</NavLink></span>


                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
};

export default PartThree;