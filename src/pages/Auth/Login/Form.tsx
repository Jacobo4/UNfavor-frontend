// Core
import React, {useEffect} from 'react';
// Redux
import {login, LoginFormValues} from '@store/auth/authAsyncActions';
// Router
import {useNavigate} from "react-router-dom";
// Form
import {useForm} from 'react-hook-form';
//Styles
import styles from './Form.module.css';
// Icons
import {MdLockOpen, MdPersonOutline} from 'react-icons/md';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import {isLoggedIn} from "axios-jwt";

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const {isLogged} = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();


    const onSubmit = handleSubmit((data: LoginFormValues) => {
        dispatch(login(data));
    })

    // redirect authenticated user to user screen
    useEffect(() => {
        if (isLogged) navigate('/');
    }, [navigate, isLogged]);


    return (
        <form className={styles.Form} onSubmit={onSubmit}>
            <div>
                <input type="text" {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} placeholder="Email"/>

                {errors.email?.type === 'required' && <span>El campo email es obigatorio</span>}
                {errors.email?.type === 'pattern' && <span>El campo email no es correcto</span>}
                <MdPersonOutline/>
            </div>
            <div>
                <input placeholder="Password" type="password" {...register('password', {
                    required: true,
                })}   />
                {errors.password?.type === 'required' && <span>El campo password es obigatorio</span>}
                <MdLockOpen />
            </div>

            <div>
                <button className={styles.sendButton} type="submit">Iniciar sesión</button>
            </div>
        </form>
    );
}
