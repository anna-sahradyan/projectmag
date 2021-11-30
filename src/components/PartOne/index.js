import React from 'react';
import s from "./PartOne.module.css";
import goodsFoto from '../../Data/goodsFoto.json';
import {NavLink} from "react-router-dom";

const PartOne = () => {


    return (
        <>
            <div className={s.PartOne}>
                <div className={s.mainPart}>
                    {goodsFoto.map((item, index) =>
                        <div key={`${item}_${index}`} className={s.part}><span
                            className={s.partSpan}>{item.description}</span>
                            <img src={item.part} alt="part"/>

                            <NavLink to="/">Show Now<img src={item.arrow} alt=""/></NavLink>


                        </div>
                    )}


                </div>
            </div>
        </>
    );
};

export default PartOne;