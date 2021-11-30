import React from 'react';
import './header.css';
import CartButtonList from "../../Containers/CartButtonList";
import SearchInputList from "../../Containers/SearchInputList";
import HeaderAuth from "../../modules/headerAuth";




const Header = () => {

    return (
        <>
            <section className="header">
                <section className="headerSection">
                    <div className="my-2  ms-3 logo">
                        <img src="/images/logoShop.png" alt="logo"/>
                    </div>

                    {/*========------------*/}
                    <div className="my-2 form">
                        <SearchInputList/>
                    </div>
                    {/*----------------*/}
                </section>
                <HeaderAuth/>
                <CartButtonList/>
            </section>

        </>
    );
};

export default Header;