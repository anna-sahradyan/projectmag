import React, {useEffect} from 'react';
import s from './Register.module.css';
import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {fetchUser} from "../../store/userSlice";
import {useDebouncedCallback} from 'use-debounce';
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useHistory} from "react-router-dom";


const Register = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    let schema = yup.object().shape({
        email: yup.string().email().required(),
        password: yup.string().min(4).max(15).required(),
        username: yup.string().required()


    });
    const {register, handleSubmit, formState: {errors}, reset} = useForm({
        ...yupResolver(schema),

    });


    useEffect(() => {
        JSON.parse(localStorage.getItem("users"));
    }, [])

    const onSubmit = useDebouncedCallback((data) => {
        dispatch(fetchUser(data));
        console.log(fetchUser(data));
        localStorage.setItem("users", JSON.stringify(data));
        reset();
        history.push('/layout');
    }, 250);


    return (
        <>
            <div className={s.contentDiv}>
                <div className={s.content}>
                    <h2>Sign Up</h2>

                    <div className={s.container}>
                        {/*<pre>{JSON.stringify(userInfo, undefined, 2)}</pre>*/}

                        <form onSubmit={handleSubmit(onSubmit)}>


                            <div className={`ui form`}>
                                <div className={`field`}>
                                    <label>username</label>
                                    <input type="text" name={`username`}
                                           placeholder={`username`} {...register("username", {required: "Username is required"})}/>
                                </div>
                                <p>{errors.username?.message}</p>
                                <div className={`field`}>
                                    <label>Email</label>
                                    <input type="text" name={`email`}
                                           placeholder={`Email...`}  {...register("email", {
                                        required: "Email is required", pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: "invalid email address"
                                        }
                                    })}
                                    />
                                </div>
                                <p>{errors.email?.message}</p>
                                <div className={`field`}>
                                    <label>Password</label>
                                    <input type="password" name={`password`}
                                           placeholder={`Password...`}{...register("password", {
                                        required: "Password is required",
                                        minLength: {value: 4, message: "Password must be more than 4 characters"},
                                        maxLength: {
                                            value: 10,
                                            message: "Password cannot exceed  more than 10 characters"
                                        }
                                    })}/>
                                    <p>{errors.password?.message}</p>
                                </div>
                            </div>
                            <button type={`submit`} className={`fluid ui button blue `}>Register</button>
                        </form>

                    </div>
                </div>

            </div>
        </>
    );
};


export const logOut = () => {
    localStorage.removeItem('users');
    window.location.href='/home';


}
export default Register;