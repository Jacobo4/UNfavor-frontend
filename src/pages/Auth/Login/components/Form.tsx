// Core
import React, {useEffect} from 'react';
// Redux
import {login, LoginValues} from '@store/auth/authAsyncActions';
import {useAppDispatch, useAppSelector} from '@store/hooks';
// Service worker
import {askPermission, registerSw, subscribeNotifications} from "@config/serviceWorker";
// Router
import {useNavigate} from "react-router-dom";
import type {NavigateFunction} from "react-router";
// Form
import {useForm} from 'react-hook-form';
//Styles
import styles from './Form.module.css';
// Icons
import {MdLockOpen, MdPersonOutline} from 'react-icons/md';

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const {isLogged} = useAppSelector((state) => state.auth);
    const dispatch = useAppDispatch();

    const navigate = useNavigate();


    const onSubmit = handleSubmit(async (data: LoginValues) => {
        try {
            await dispatch(login(data));
            const serviceWorkerReg = await registerSw();
            await subscribeNotifications(serviceWorkerReg);
            navigate('/');
            // Listen to push notifications
            // serviceWorkerReg.addEventListener('push', (event) => {
            //     // Retrieve the notification payload
            //     const notificationData = event.data.json();
            //
            //     // Handle the push notification as desired
            //     handlePushNotification(notificationData);
            // });
        } catch (error) {
            console.log(error);
        }
    })

    // redirect authenticated user to user screen
    useEffect(() => {
        if (isLogged) navigate('/');
    }, [navigate, isLogged]);


    return (
        <form className={`form ${styles.Form}`} onSubmit={onSubmit}>
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
                <MdLockOpen/>
            </div>

            <div>
                <button className={styles.sendButton} type="submit">Iniciar sesión</button>
            </div>
        </form>
    );
}
