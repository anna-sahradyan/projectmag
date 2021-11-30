import React from 'react';
import s from './Nav.module.css';
import {NavLink} from "react-router-dom";


const Nav = () => {

    return (
        <>
            <nav className={s.nav}>
                <div className={s.navBar}>
                    <div className={s.side}>
                        <ul className={s.menu}>
                            <span className={s.menuIcon}><img src="/images/menu.png" alt="menu"/></span>
                            <li className={s.menuList}>Category
                                <ul className={s.menuDrob} >
                                    <li className={s.listLi}>Arts & Crafts</li>
                                    <li className={`${s.automotiveList} ${s.listLi}`}><NavLink to ="/" className={s.linkList} >Automotive</NavLink>
                                        <div className={s.automotiveDiv}>
                                            <ul className={s.menuAutomative}>
                                                <li><NavLink to="/" className={s.linkList}>Car Care</NavLink></li>
                                                <li><NavLink to ="/" className={s.linkList}>Lights</NavLink></li>
                                                <li><NavLink to ="/" className={s.linkList}>Tools & Equipment</NavLink></li>
                                            </ul>
                                        </div></li>


                                    <li className={`${s.electronicsList} ${s.listLi}`}><NavLink to ="/" className={s.linkList} >Electronics </NavLink>
                                        <div className={s.electronicsDiv}>
                                            <ul className={s.menuElectonics}>
                                                <div className={s.electronicsPage1} >
                                                    <h4 className={s.titleEl}>Electronics</h4>
                                                    <li><NavLink to="/">Computers</NavLink></li>
                                                    <li><NavLink to="/">Accessories</NavLink></li>
                                                    <li><NavLink to="/">Computers & Tablets</NavLink></li>
                                                    <li><NavLink to="/">Camera</NavLink></li>
                                                    <li><NavLink to="/">Car &Vehicle Electronics</NavLink></li>
                                                    <li><NavLink to="/">TV & Video</NavLink></li>
                                                </div>
                                                <div className={s.electronicsPage2}>
                                                    <h4 className={s.titleEl}>Smartwatches</h4>
                                                    <li><NavLink to="/">Camera</NavLink></li>
                                                    <li><NavLink to="/">TV & Video</NavLink></li>
                                                    <li><NavLink to="/">Computers & Tablets</NavLink></li>
                                                    <li><NavLink to="/">Electronics</NavLink></li>
                                                    <li><NavLink to="/">Car & Vehicle Electronics</NavLink></li>
                                                </div>
                                            </ul>
                                            <div className={s.electronicsImg}>
                                                <img src="/images/watch4.jpg" alt="watch" />
                                            </div>
                                        </div>
                                    </li>






                                    <li className={`${s.listLi} ${s.babyList}`} ><NavLink to="/" className={s.linkList} >Baby</NavLink>
                                        <div className={s.babyDiv}>
                                            <ul className={s.menuBaby}>
                                                <li><NavLink to="/">Stroller</NavLink></li>
                                                <li><NavLink to="/">Toys</NavLink></li>

                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`${s.listLi} ${s.beautyList}`} ><a href="/" className={s.linkList} >Beauty</a>
                                        <div className={s.beautyDiv}>
                                            <ul className={s.menuBeauty}>
                                                <li><NavLink to="/">Hair Care</NavLink></li>
                                                <li><NavLink to="/">Makeup</NavLink></li>
                                                <li><NavLink to="/">Skin Care</NavLink></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`${s.listLi} ${s.compList}`}><a href="/" className={s.linkList} >Computers</a>
                                        <div className={s.compDiv}>
                                            <ul className={s.menuComp}>
                                                <li><NavLink to="/">Accessories</NavLink></li>
                                                <li><NavLink to="/">Computers & Tablets</NavLink></li>

                                            </ul>
                                        </div></li>
                                    <li className={s.listLi} >Home And Kitchen</li>
                                    <li className={`${s.listLi} ${s.industrialList}`} ><NavLink to="/" className={s.linkList} >Industrial And Scientific</NavLink>
                                        <div className={s.industrialDiv}>
                                            <ul className={s.menuIndustrial}>
                                                <li><NavLink to="/">Filtration</NavLink></li>
                                                <li><NavLink to="/">Hand Tools</NavLink></li>
                                                <li><NavLink to="/">Industrial Electrical</NavLink></li>


                                            </ul>
                                        </div></li>
                                    <li className={s.listLi} >Luggage</li>
                                    <li className={`${s.listLi} ${s.mensList}`}><NavLink to="/" className={s.linkList} >Mens</NavLink>
                                        <div className={s.mensDiv}>
                                            <ul className={s.menuMens}>
                                                <li><NavLink to="/">Accessories</NavLink></li>
                                                <li><NavLink to="/">Clothing</NavLink></li>
                                                <li><NavLink to="/">Surf, Skate &Street</NavLink></li>
                                            </ul>
                                        </div>
                                    </li>
                                    <li className={`${s.listLi} ${s.petList}`}><NavLink to="/" className={s.linkList} >Pet Supplies</NavLink>
                                        <div className={s.petDiv}>
                                            <ul className={s.menuPet}>
                                                <li><NavLink to="/">Dogs</NavLink></li>
                                                <li><NavLink to="/">Fish</NavLink></li>
                                                <li><NavLink to="/">Small Animals</NavLink></li>
                                            </ul>
                                        </div>

                                    </li>
                                    <li className={`${s.listLi} ${s.womenList}`}><a href="/" className={s.linkList} >Women's</a>
                                        <div className={s.womenDiv}>
                                            <ul className={s.menuWomens}>
                                                <li><NavLink to="/">Accessories</NavLink></li>
                                                <li><NavLink to="/">Clothing</NavLink></li>
                                                <li><NavLink to="/">Jewelry</NavLink></li>
                                                <li><NavLink to="/">Shoes</NavLink></li>
                                                <li><NavLink to="/">Watches</NavLink></li>
                                            </ul>
                                        </div>

                                    </li>
                                </ul>
                            </li>
                            <span className={s.arrowIcon}><img src="/images/arrow1.png" alt="arrow" /></span>

                        </ul >
                    </div>
                    {/*------------------*/}
                    {/* secound menu  */}
                    <div className={s.sideTwo}>
                        <ul className={s.menuTwo}>
                            {/*first sub menu HOME*/}
                            <li className={s.firstLi} ><NavLink to="/" className={s.menuLi}>Home<img src="/images/arrow1.png" alt="arrow" /></NavLink>
                                <ul className={s.subMenuTwo}>
                                    <li><NavLink to="/homedecor" className={s.menuLink}>Home Dekor</NavLink></li>
                                    <li><NavLink to="/">Home Centre</NavLink></li>
                                    <li><NavLink to="/">Home Furnishing</NavLink></li>
                                </ul> </li>
                            {/*second sub menu Featured */}

                            <li className={s.featuredList}><NavLink to="/" className={s.menuLink}>Featured<img src="/images/arrow1.png" alt="arrow" /></NavLink>
                                <div className={s.featuredDiv}>
                                    <ul className={s.menuFeatured}>
                                        <div className={s.part}>
                                            <h3 className={s.title}>Kitchen</h3>
                                            <li><NavLink to="/">Home & Kitchen</NavLink></li>
                                            <li><NavLink to="/">Ranges &Ovens</NavLink></li>
                                            <li><NavLink to="/">Refrigerators</NavLink></li>
                                            <li><NavLink to="/">Kitchen Carts & islands</NavLink></li>
                                            <li><NavLink to="/">Kitchen Sinks</NavLink></li>
                                            <li><NavLink to="/">Kitchen & Faucets</NavLink></li>
                                            <li><NavLink to="/">Kitchen Cabinets</NavLink></li>
                                        </div>
                                        <div className={s.part}>
                                            <h3 className={s.title}>Home Essentials</h3>
                                            <li><NavLink to="/">Computers</NavLink></li>
                                            <li><NavLink to="/">Computers & Tablets</NavLink></li>
                                            <li><NavLink to="/">Accessories</NavLink></li>
                                            <li><NavLink to="/">Camera</NavLink></li>

                                            <li><NavLink to="/">TV & Videos</NavLink></li>

                                        </div>
                                        <div className={s.part}>
                                            <h3 className={s.title}>Fashion</h3>
                                            <li><NavLink to="/">Baby</NavLink></li>
                                            <li><NavLink to="/">Stroller</NavLink></li>
                                            <li><NavLink to="/">Toys</NavLink></li>
                                            <li><NavLink to="/">Beauty</NavLink></li>
                                            <li><NavLink to="/">Hair Care</NavLink></li>
                                            <li><NavLink to="/">Makeup</NavLink></li>
                                            <li><NavLink to="/">Skin Care</NavLink></li>
                                        </div>
                                    </ul>
                                    <div className={s.divImg}><span>Smart Home Product
									<h2>Smart Home Devices</h2>
									<h2>& Systems</h2>
									<NavLink to="/">Best-selling smart <img src="/images/blue arrow.png"alt=""  /></NavLink>
								</span>
                                        <img src="/images/naushniki2.jpg"alt="" />
                                    </div>
                                </div>
                            </li>
                            <li className={s.shopList}><NavLink to="/" className={s.menuLink}>Shop<img src="/images/arrow1.png" alt="arrow" /></NavLink>
                                <div className={s.shopDiv}>
                                    <ul className={s.menuShop}>
                                        <li><NavLink to="/filter">Shop Overview1</NavLink></li>
                                        <li><NavLink to="/">Shop Overview2</NavLink></li>
                                        <li><NavLink to="/">Shop Overview3</NavLink></li>
                                        <li><NavLink to="/">Cart</NavLink></li>
                                        <li><NavLink to="/">Checkout</NavLink></li>
                                        <li><NavLink to="/">My Account</NavLink></li>
                                        <li><NavLink to="/">Order Tracking</NavLink></li>

                                    </ul>
                                    {/**/}
                                </div>
                            </li>
                            <li className={s.blogList}><NavLink to="/" className={s.menuLink}>Blog<img src="/images/arrow1.png" alt="arrow" /></NavLink>
                                <div className={s.blogDiv}>
                                    <NavLink to="/">Single Page</NavLink>
                                </div>
                            </li>
                            <li><NavLink to="/" className={s.menuLink}>About<img src="/images/arrow1.png" alt="arrow" /></NavLink></li>
                            <li><NavLink to="/" className={s.menuLink}>Contact<img src="/images/arrow1.png" alt="arrow" /></NavLink></li>
                        </ul>



                    </div>


                </div>



            </nav>
        </>
    );
};

export default Nav;