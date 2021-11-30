import {combineReducers} from "redux";
import cart from '../store/cartSlice';
import allGoods from '../store/allGoodsSlice';
import sort from '../store/sortSlice';
import inputValue from '../store/inputFilterSlice';
import  goodsPages from '../store/goodsPagesSlice';
import user from '../store/userSlice';
import wishList from '../store/wishListSlice';
const rootReducer = combineReducers({
    cart,
    allGoods,
    sort,
    inputValue,
    goodsPages,
    user,
    wishList,
    devTools:true


})
export default rootReducer;