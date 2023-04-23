// Core
import React, {useEffect} from 'react';
// Redux
import {login, LoginCredentials} from '@store/auth/authAsyncActions';
// Router
import {useNavigate} from "react-router-dom";
// Form
import {useForm} from 'react-hook-form';
//Styles
import styles from './Form.module.css';
// Icons
import {MdLockOpen, MdPersonOutline} from 'react-icons/md';
import {useAppDispatch, useAppSelector} from '@store/hooks';

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const {status, error, authToken} = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const navigate = useNavigate()


    const onSubmit = handleSubmit((data: LoginCredentials) => {
        dispatch(login(data));
    })

    // redirect authenticated user to profile screen
    useEffect(() => {
        if (authToken) {
            navigate('/')
        }
    }, [navigate, authToken])


    return (
        <form className={styles.Form} onSubmit={onSubmit}>
            <div>
                <input type="text" {...register('email', {
                    required: true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} placeholder="Email"/>

                {errors.email?.type === 'required' && <p>El campo email es obigatorio</p>}
                {errors.email?.type === 'pattern' && <p>El campo email no es correcto</p>}
                <MdPersonOutline className={styles.icon}/>
            </div>
            <div>
                <input placeholder="Password" type="password" {...register('password', {
                    required: true,
                })}   />
                {errors.password?.type === 'required' && <p>El campo password es obigatorio</p>}
                <MdLockOpen className={styles.icon}/>
            </div>

            <div>
                <button className={styles.sendButton} type="submit">Iniciar sesión</button>
            </div>
        </form>
    );
}
