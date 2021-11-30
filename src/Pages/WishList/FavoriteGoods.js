import React from 'react';
import s from './FavoriteGoods.module.css';
import {NavLink} from "react-router-dom";
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const FavoriteGoods = (props) => {


    return (
        <>

            <div className={s.wishList}>
                <div>

                    <div className={s.cartImages}>
                        <NavLink to={`/goods/${props.articul}`}> <img src={props.proImages} alt=""
                                                                      className={s.cartImagesImg}/></NavLink>
                        <div className={s.iconList}>
                            <Stack direction="row" spacing={1}>
                                <NavLink to={`#`}> <IconButton aria-label="delete" color="primary"
                                >
                                    <DeleteSweepIcon className={`remove-item`}data-key={props.articul} />
                                </IconButton></NavLink>
                                <NavLink to={`/favoriteGoods`}> <IconButton aria-label="" color={`secondary`}
                                >
                                    <FavoriteIcon/>
                                </IconButton></NavLink>
                                <NavLink to={`/cart`}><IconButton color="primary"
                                                                  aria-label="add to shopping cart"

                                >
                                    <AddShoppingCartIcon   data-key={props.articul}className={`add-to-cart ${s.addToCart}`}  />
                                </IconButton ></NavLink>


                            </Stack>
                        </div>
                        <div className={s.rightPart}>
                            <p className={s.titleP}>{props.title}</p>
                            <p><AttachMoneyIcon/>{props.cost}</p>


                        </div>

                    </div>


                </div>


            </div>


        </>
    );
};

export default FavoriteGoods;