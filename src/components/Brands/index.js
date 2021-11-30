import React, {forwardRef} from 'react';
import s from './Brands.module.css';


const Brands = forwardRef((props, ref) => {

    return (
        <>



                <img src={props.images} alt="" className={s.slideSingle} />



        </>
    )


});

Brands.displayName = 'Brands';
export default Brands;