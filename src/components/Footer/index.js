import React from 'react';
import s from './Footer.module.css';
import {NavLink} from "react-bootstrap";
import img from '../../Data/img.json';

const Footer = () => {
    return (
        <>
            <footer className={s.footer}>
                <div className={s.listInput}>
                    <div className={s.signUp}>
                        <form className={`input-group ${s.inputBox}`}>
                            <input type="text" className={`form-control`}
                                   placeholder="Enter email for weekly newsletter"
                                   aria-describedby="button-addon"/>
                            <button className={`btn btn-dark  ${s.inputButton}`} type="submit" id="button-addon">Sign Up
                            </button>
                        </form>
                    </div>
                    <div className={` ${s.logo}`}>
                        {img.map((item, index) => <div key={`${item}_${index}`}><NavLink to={item.navlink}><img
                            src={item.img} alt=""/></NavLink></div>)}
                    </div>
                </div>
                <div className={` ${s.footerList}`}>
                    <ul>
                        <div className={s.part}>
                            <h6>SERVICES & SOLUTIONS</h6>
                            <li><NavLink to='/'>Find a Registry</NavLink></li>
                            <li><NavLink to='/'>Manage Your Registry</NavLink></li>
                            <li><NavLink to='/'>Book an Appointment</NavLink></li>
                            <li><NavLink to='/'>Wedding Registry</NavLink></li>
                            <li><NavLink to='/'>Baby Registry</NavLink></li>
                            <li><NavLink to='/'>Housewarming</NavLink></li>
                            <li><NavLink to='/'>College Registry</NavLink></li>


                        </div>
                        <div className={s.part}>
                            <h6>INFORMATION</h6>

                            <li><NavLink to='/'>Investor Relations</NavLink></li>
                            <li><NavLink to='/'>Privacy Policy</NavLink></li>
                            <li><NavLink to='/'>Terms of Use</NavLink></li>
                            <li><NavLink to='/'>Find A Store</NavLink></li>
                            <li><NavLink to='/'>Glossary</NavLink></li>

                            <li><NavLink to='/'>Accessibility</NavLink></li>


                        </div>
                    </ul>

                </div>
                <div className={s.brand}>
                    <span>Shop Our Brands
</span>
                     {img.map((item,index)=> <p key={`${item}_${index}`}> <img src={item.brand} alt=""/></p>)}

                </div>
                <hr/>
                <p className={s.copy}>© 2021 Magazin. All Rights Reserved</p>
            </footer>

        </>
    );
};

export default Footer;