import React, {useRef, useState} from 'react';
import carouselArr from '../Data/carousel.json';
import s from "../components/Brands/Brands.module.css";
import Brands from "../components/Brands";

const BrandsList = () => {
    const [count, setCount] = useState(0);
    const ref = useRef();


    const leftArrow = () => {
        let counter = count;
        counter = counter - 116;
        setCount(counter);
        if (counter < -928) {
            counter = 0;
            setCount(counter++);

        }
        ref.current.style.left = counter + 'px';
        console.log(ref.current.style.left);
    }

    const rightArrow = () => {
        let counter = count;
        counter = counter - 116;
        setCount(counter);
        if (counter < -928) {
            counter = 0;
            setCount(counter++);

        }
        ref.current.style.left = counter + 'px';
        console.log(ref.current.style.left);

    }


    return (
        <>
            <div className={s.contentDiv}>
                <h2 className={s.title}>
                    Our Exclusive Brands</h2>
                <div className={s.content}>
                    <h2 className={s.title}>
                        Our Exclusive Brands</h2>
                    <div className={s.card} ref={ref}>

                        {carouselArr.map((item, index) => <Brands key={`${item}_${index}`}
                                                                  images={item.images}
                                                                  id={item.id}/>)}

                    </div>
                </div>

            </div>
            <div className={s.divBtn}>
                <div className={`${s.btnPrev} ${s.btn}`} onClick={leftArrow}><img src="images/left.png" alt=""/>
                </div>
                <div className={`${s.btnNext} ${s.btn}`} onClick={rightArrow}><img src="images/arrow right.png"
                                                                                   alt=""/></div>
            </div>


        </>
    );
};

export default BrandsList;