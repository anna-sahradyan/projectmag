import React, {useRef} from 'react';
import '../components/Header/header.css';
import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {selectInputValue, setInputValue} from "../store/inputFilterSlice";


const SearchInputList = () => {
    let dispatch = useDispatch();
    const ref = useRef();
    const inputValue = useSelector(selectInputValue);
    const removeInput = () => {
        ref.current.value = '';
        window.location.href = 'http://localhost:3000/home'

    }


    const onChangeSearchInput = (e) => {
        e.preventDefault();
        dispatch(setInputValue(e.target.value));

    }


    return (
        <>
            <div>
                <NavLink to='/filter'>
                    <form className=' inputSearch'>
                        <input type="text" aria-describedby="button-addon"
                               className="form-control searchInput shadow-none"
                               defaultValue={inputValue} onChange={onChangeSearchInput} placeholder='Search...'
                               ref={ref}/>
                        {inputValue &&
                        (<img src="/images/remove.png" alt="remove" width={10} height={10}
                              className={`remove`} onClick={removeInput}/>)}
                    </form>
                </NavLink>

            </div>


        </>
    );
};

export default SearchInputList;