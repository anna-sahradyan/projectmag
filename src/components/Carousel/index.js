import React from 'react';
import {Carousel} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Carousel.css';

import {NavLink} from "react-router-dom";


const Slider = () => {


    return (
        <>

                <Carousel fade className='carousel'>
                    <Carousel.Item interval={2000}>
                        <img className="slid" src="/images/slide1.jpg" alt="slide1"/>
                        <Carousel.Caption>
                            <div className=" text textSlider">
                                <h3>Best Holiday</h3>
                                <h2>Weekend Deals</h2>
                                <p>Save 20% on Qualifying items when you purchase 1 or more Qualifying items
                                    offered </p>
                                <NavLink to="/" className='textNav'>View Collection</NavLink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="slid" src="/images/kitchen1.jpg" alt="slide1"/>
                        <Carousel.Caption>
                            <div className=" text textSlider2">
                                <h3>Best Holiday</h3>
                                <h2>Weekend Deals</h2>
                                <p>Save 20% on Qualifying items when you purchase 1 or more Qualifying items
                                    offered </p>
                                <NavLink to="/" className='textNav'>View Collection</NavLink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item interval={1000}>
                        <img className="slid" src="/images/comp.webp" alt="slide1"/>
                        <Carousel.Caption>
                            <div className=" text textSlider3">
                                <h3>Best Holiday</h3>
                                <h2>Weekend Deals</h2>
                                <p>Save 20% on Qualifying items when you purchase 1 or more Qualifying items
                                    offered </p>
                                <NavLink to="/" className='textNav'>View Collection</NavLink>
                            </div>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>




        </>
    );
};

export default Slider;