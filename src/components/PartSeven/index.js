import React, {useState} from 'react';
import s from './PartSeven.module.css';
import card from '../../Data/card.json'
import {NavLink} from "react-router-dom";

const PartSeven = () => {
    const [count, setCount] = useState(0);
    const ref = React.createRef();

    const carouselArrow= () => {
        let counter = count;
        counter = counter - 305;
        setCount(counter);
        if (counter < -610) {
            counter = 0;
            setCount(counter++);

        }
        ref.current.style.left = counter + 'px';


    }

    return (
        <>
            <div className={s.contentDiv}>
                <h2>Share your photos #shopping</h2>
                <div className={s.contentBox}>
                    <div className={s.cardDiv} ref={ref}>
                        {card.map((item,index)=> <div className={s.cardBox} key={`${item}_${index}`}>
                            <div className={s.cardBox}><NavLink to={item.navlink}  ><img src={item.img}
                                                                                                                alt="" /></NavLink>

                            </div>
                        </div>)}
                    </div>
                </div>

                <div className={s.divBtn} onClick={carouselArrow}>
                    <div className={`${s.btnPrev} ${s.btn}`} ><img src="images/left.png" alt=""/>
                    </div>
                    <div className={`${s.btnNext} ${s.btn}`}><img src="images/arrow right.png"
                                                                                       alt=""/></div>

                </div>
            </div>

        </>
    );
};

export default PartSeven;