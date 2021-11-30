import React from 'react'
import s from './PartFive.module.css';
import {NavLink} from "react-router-dom";

const PartFive = () => {
    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <div className={s.card}>
                     <div className={s.text}><h2>America’s #1 Wedding Registry</h2>
                        <p>Start building your perfect registry online now or with an expert in a store near you.</p>
                        <div className={s.textDiv}><NavLink to='/' className={s.navlink}>
Create Your Registry <img src="/images/blue arrow.png" alt="" className={s.arrow}/> </NavLink></div></div>
                        <img src="/images/wedding.png" alt="" className={s.wedding}/>
                    </div>

                </div>

            </div>
        </>
    );
};

export default PartFive;