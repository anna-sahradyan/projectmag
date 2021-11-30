import React from 'react';
import Main from "./components/Main";
import Header from "./components/Header";
import {Route, Switch} from "react-router-dom";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import HomeDecor from "./Pages/HomeDecor";
import AllGoodsList from "./Containers/AllGoodsList";
import CartList from "./Containers/CartList";
import GoodsPageList from "./Containers/GoodsPageList";
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Register from "./modules/register/Register";
import Layout from "./modules/account/Layout";
import PaginationList from "./Pages/Pagination";
import ErrorPage from "./Pages/GoodsPages/ErrorPage";
import WishList from "./Containers/WishList";
import CardList from "./Containers/CardList";
import SortPageList from "./Containers/SortPageList";


const App = () => {


    return (
        <>
            <ToastContainer/>
            <div className='wrapper'>
                <Header/>
                <Nav/>
                <div className='main'>
                    <Switch>
                        <Route exact path='/' component={Main}/>
                        <Route path='/homedecor' component={HomeDecor}/>
                        <Route path='/cart' component={CartList}/>
                        <Route exact path='/filter' component={AllGoodsList}/>
                        <Route exact path="/goods/:productId" component={GoodsPageList}/>
                        <Route path={'/register'} component={Register}/>
                        <Route path={'/layout'} component={Layout}/>
                        <Route path={'/pagination'} component={PaginationList}/>
                        <Route path={`/favoriteGoods`} component={WishList} />
                        <Route path={`/cardList`} component={CardList} />
                        <Route path={`/sort`} component={SortPageList} />
                        <Route path='*' exact={true} component={ErrorPage} />

                    </Switch>



                </div>
                <Footer/>


            </div>


        </>
    );
};


export default App;