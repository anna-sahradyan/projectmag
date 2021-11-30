import React from 'react';
import './Drawer.css';

const Drawer = (props) => {
    return (
        <>
            <div className="overlay">
                <div className="drawer">
                    <h2 className='my-2 ms-5'>Cart</h2>
                    <section>
                        <div> <img src="/images/remove.png" alt="" width={20} height={20} onClick={props.closeCart}
                        /></div>
                        <div className="cartGoods">
                            <img src="/images/boot.jpg" alt="boots" width={150} height={150}/>

                            <div><p>boots red</p>
                                <b>300$</b></div>

                        </div>
                    </section>

                </div>


            </div>
        </>
    );
};

export default Drawer;