// Core
import React, {useEffect} from 'react';
// Redux
import {login, LoginCredentials} from '@store/auth/authAsyncActions';
// Router
import {useNavigate} from "react-router-dom";
// Form
import {Controller, useForm} from 'react-hook-form';
//Styles
import styles from './Form.module.css';
// Icons
import {MdLockOpen, MdPersonOutline} from 'react-icons/md';
import {useAppDispatch, useAppSelector} from '@store/hooks';
import PhoneInput from "react-phone-number-input";
import 'react-phone-number-input/style.css'

type FormProps = {
    user: {
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number,
        user_reviews_num: string,
        user_reviews_sum: string,
        user_favors: Array<string>
    },
    favor: {
        title: string,
        description: string,
        price: number,
        location: string
    }
}
export default function Form() {
    const {register, handleSubmit, formState: {errors}, control} = useForm();
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const onSubmit = handleSubmit((data) => {
        console.log(data)
        // dispatch(signIn(data));
    })


    return (
        <form className={styles.Form} onSubmit={onSubmit}>
            <div>
                <input placeholder="Nombre" type="text" {...register(`user[name]`, {
                    required: true,
                })}   />
                {errors.user?.name?.type === 'required' && <p>El campo nombre es obigatorio</p>}
            </div>
            <div>
                <input placeholder="Correo electrónico" type="email" {...register(`user[email]`, {
                    required: true,
                })}   />
                {errors.user?.email?.type === 'required' && <p>El campo email es obigatorio</p>}
            </div>
            <div>
                <input placeholder="Contraseña" type="password" {...register(`user[password]`, {
                    required: true,
                })}   />
                {errors.user?.password?.type === 'required' && <p>El campo password es obigatorio</p>}
            </div>
            <div>
                <Controller
                    control={control}
                    name={"user[phone]"}
                    render={({field: {onChange, value}}) => (
                        <PhoneInput
                            placeholder="Enter phone number"
                            value={value}
                            onChange={onChange}
                            defaultCountry="CO" // Optional: set the default country
                        />
                    )}
                    rules={{required: true}} // Optional: add validation rules
                />
                {errors.user?.phone?.type === 'required' && <p>El campo phone es obigatorio</p>}
            </div>
            <div>
                <button type="submit">Registrarse</button>
            </div>
        </form>
    );
}
