import React, {useState} from 'react';
import s from './Cart.module.css';
import list from '../../Data/list.json';
import {NavLink} from "react-router-dom";
import HomeIcon from '@mui/icons-material/Home';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
const Cart = (props) => {
    const [flag, setFlag] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        return setFlag(!flag);
    }

    return (
        <>

            <div className={s.contentCart}>
                <div className={s.content}>


                    <div className={s.cartLineRight}>

                        <div className={s.cartLine}>
                            {/*section1*/}
                            <div className={s.pin}>
                                <p>Check delivery time & services</p>
                                <NavLink to={`cardList`}><button type='button' className={`btn btn-outline shadow-none ${s.pinBtn}`}>ENTER
                                    CREDIT CARD
                                </button></NavLink>

                            </div>
                            {/*section2*/}
                            <ul className={s.offersList}>
                                <li>5%Unlimited Cashback on Axis Credit Card.TCA</li>
                                {flag && (<div>
                                    {list.map((item, index) => <li
                                        key={`${index}_${item}`}>{item.text}</li>)}</div>)}
                                <span style={{color: '#FF7167', fontSize: 16, marginLeft: 40}}
                                      onClick={handleClick}>Show More <img
                                    src="/images/redarrow.png" alt="arrow" width={20} height={15}/></span>
                            </ul>
                            {/*section3*/}
                            <p className={` ${s.cartItem}`}><b>My Shopping
                                Cart({props.elem})</b><b>Total:{props.sum}<MonetizationOnIcon color={"success"} /></b></p>
                            {/*section4*/}
                            <div className={s.cartImages}>
                                <NavLink to={`/goods/${props.articul}`}> <img src={props.proImages}  alt=""
                                                                              className={s.cartImagesImg}/></NavLink>
                                <p><NavLink to='/' className={s.cartPnav}>{props.title}</NavLink></p>
                                <p className={s.cartPcost}><MonetizationOnIcon color={"success"} />{props.cost}</p>
                                <div className={s.cartBox}>
                                    <button className={`btn btn-light ${s.btnI} add-to-cart`}
                                            data-key={props.articul}>+
                                    </button>
                                    <button className={`btn btn-light ${s.btnM} minus-item`}
                                            data-key={props.articul} >-
                                    </button>
                                    <button className={`btn btn-light   ${s.btnEl}`}>{props.elem}

                                    </button>
                                </div>
                                <hr/>

                                <div className={s.cartBtn}>
                                    <button type="button" data-key={props.articul}
                                            className={`btn btn-outline   ${s.btnR} remove-item`}
                                            style={{hover: 'shadow-none'}}><DeleteForeverIcon color={`primary`} style={{marginTop: '-8px'}} /> REMOVE
                                    </button>
                                    <NavLink to='/'>
                                        <button type="button" className={`btn btn-outline  shadow-none ${s.btnH}`}><HomeIcon color={`primary`} style={{marginTop: '-8px'}}/>HOME
                                        </button>
                                    </NavLink>

                                    <NavLink to={`#`}> <button type="button" className={`btn btn-outline  shadow-none ${s.btnW}`} ><FavoriteBorderIcon color={"secondary"}data-key={props.articul} className={`wish-list`}onClick={props.clickHandlerToWishList}/>WISHLIST
                                    </button></NavLink>

                                </div>

                            </div>
                            {/*section5*/}
                            <div className={s.wishlist}>
                                <NavLink to='#'> <button type="button" className={`btn btn-outline `}> Add More From
                                    Wishlist<img src="/images/heart.png" alt="heart" width={20}
                                                 style={{marginLeft: 10, marginTop: -10}}/></button></NavLink>
                                <img src="/images/arrow right.png" alt="arrow"
                                     style={{width: 15, marginLeft: '170px'}}/>
                            </div>

                        </div>
                    </div>




                </div>

            </div>


        </>
    );
};

export default Cart;
