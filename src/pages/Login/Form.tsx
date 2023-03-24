import React from 'react'
import { useForm } from 'react-hook-form'
import styles from './Form.module.css'
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOpenIcon from '@mui/icons-material/LockOpen';

type Profile = {
    email: string
    password: string
    
    }

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm<Profile>()

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })
  
    return (
        <div>
        <form onSubmit={onSubmit}>
            <div className={styles.formContainer}>
                
                <input type="text" {...register('email', {
                    required:true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} placeholder="Email" className={styles.emailInput}/>
                
                {errors.email?.type === 'required' && <p>El campo Email es obigatorio</p>}
                {errors.email?.type === 'pattern' && <p>El campo Email no es correcto</p>}
                <PersonOutlineIcon className={styles.icon}/>
            
                
                <input placeholder="Password" type="password" {...register('password', {
                    required:true,
                })}   />
                {errors.password?.type === 'required' && <p>El campo Password es obigatorio</p>}
                <LockOpenIcon className={styles.icon}/>
            
            
            <button className={styles.sendButton} type="submit">Iniciar sesión</button>
            </div>
        </form>
        </div>
    );
}
