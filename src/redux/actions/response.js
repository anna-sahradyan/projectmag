import axios from "axios";
import {getAllGoods, getAllGoodsFailure, getAllGoodsSuccess} from "../../store/allGoodsSlice";
import {fetchFailure, fetchStart, fetchSuccess} from "../../store/userSlice";


export const fetchSortAllGoods = (sort) => (dispatch) => {

    dispatch(getAllGoods())

    try {

        axios.get(`https://60d8b48beec56d0017477462.mockapi.io/allGoods?sortBy=${sort}&order=asc`).then(({data}) => {

            dispatch(getAllGoodsSuccess(data))

        })

    } catch (error) {
        dispatch(getAllGoodsFailure())
    }
}

export const fetchAllGoods = () => (dispatch) => {

    dispatch(getAllGoods())


    try {
        axios.get(`https://60d8b48beec56d0017477462.mockapi.io/allGoods`).then(({data}) => {

            dispatch(getAllGoodsSuccess(data))

        })

    } catch (error) {
        dispatch(getAllGoodsFailure())
    }
}

export const fetchUser1 = async (user, dispatch) => {
    dispatch(fetchStart());
    try {
        const response = await axios.post("http://jsonplaceholder.typicode.com/users", user);
        dispatch(fetchSuccess(response.data));
    } catch (err) {
        dispatch(fetchFailure());
    }
}

