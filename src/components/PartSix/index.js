import s from './PartSix.module.css';
import React from "react";
import {NavLink} from "react-bootstrap";


const PartSix = () => {

    return (
        <>
            <div className={s.contentDiv}>
                <h2 className={s.title}>See What’s New + Trending</h2>
                <div className={s.boxes}>

                    <div className={s.content}>
                        <div className={`${s.box} ${s.box1}`}><img src="/images/part6-6.jpg" alt=""/><span>Sleep Better with Brookstone</span><NavLink to='/'className={s.arrow}>Show Now<img src="/images/blue arrow.png"
                                                                                                                                                                 alt="" /></NavLink></div>
                        <div className={`${s.box} ${s.box2}`}><img src="/images/part6-1.jpg" alt=""/><span>Sleep Better with Brookstone</span><NavLink to='/'className={s.arrow}>Show Now<img src="/images/blue arrow.png"
                                                                                                                                                                 alt=""/></NavLink></div>
                        <div className={`${s.box} ${s.box3}`}><img src="/images/part6-2.jpg" alt=""/><span>Sleep Better with Brookstone</span><NavLink to='/'className={s.arrow}>Show Now<img src="/images/blue arrow.png"
                                                                                                                                                                 alt=""/></NavLink></div>
                        <div className={`${s.box} ${s.box4}`}><img src="/images/part6-3.jpg" alt=""/><span>Sleep Better with Brookstone</span><NavLink to='/'className={s.arrow}>Show Now<img src="/images/blue arrow.png"
                                                                                                                                                                 alt=""/></NavLink></div>
                        <div className={`${s.box} ${s.box5}`}><img src="/images/part6-4.jpg" alt=""/><span>Sleep Better with Brookstone</span><NavLink to='/' className={s.arrow}>Show Now<img src="/images/blue arrow.png"
                                                                                                                                                                 alt=""className={s.arrow}/></NavLink></div>
                        <div className={`${s.box} ${s.box6}`}><img src="/images/part6-5.jpg" alt=""/><span>Sleep Better with Brookstone</span><NavLink to='/' className={s.arrow}>Show Now<img src="/images/blue arrow.png"
                                                                                                                                                         alt=""/></NavLink></div>
                    </div>
                </div>
            </div>

        </>
    );
};

export default PartSix;
