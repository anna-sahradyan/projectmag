import React from 'react';
import PartOne from "../PartOne";
import Slider from "../Carousel";
import GoodsListOne from "../../Containers/GoodsListOne";
import PartTwo from '../PartTwo';
import PartThree from "../PartThree";
import GoodsListTwo from "../../Containers/GoodsListTwo";
import BrandsList from "../../Containers/BrandsList";
import PartFour from "../PartFour";
import PartFive from "../PartFive";
import PartSix from "../PartSix";
import PartSeven from "../PartSeven";
import GoodsListThree from "../../Containers/GoodsListThree";





const Main = () => {
    return (

        <>
            <PartOne/>
            <Slider/>
            <GoodsListOne/>
            <PartTwo/>
            <PartThree/>
            <GoodsListTwo/>
            <BrandsList/>
            <PartFour/>
            <PartFive/>
            <PartSix/>
            <PartSeven/>
            <GoodsListThree/>


        </>

    );
};

export default Main;