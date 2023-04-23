// Core
import React from 'react';
// Form
import { useForm } from 'react-hook-form';
//Styles
import styles from './SettingForm.module.css';
// Icons

type publicProfile = {
    user: string
    fullName: string
    email: string
    phone: string
    
    }

export default function Form() {
    const {register, handleSubmit, formState: {errors}} = useForm<publicProfile>()

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    })
  
    return (
        <div>
        <form onSubmit={onSubmit}>
            <div className={styles.formContainer}>
                <input type="text" {...register('user', {
                    required:true,
                })} placeholder="Usuario" className={styles.emailInput}/>
                
                {errors.user?.type === 'required' && <p>El campo usuario es obigatorio</p>}
                {errors.user?.type === 'pattern' && <p>El campo usuario no es correcto</p>}
                <input type="text" {...register('fullName', {
                    required:true,
                })} placeholder="Nombre completo" className={styles.emailInput}/>
                
                {errors.fullName?.type === 'required' && <p>El campo Nombre es obigatorio</p>}
                
                <input type="text" {...register('email', {
                    required:true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} placeholder="Email" className={styles.emailInput}/>
                
                {errors.email?.type === 'required' && <p>El campo Email es obigatorio</p>}
                {errors.email?.type === 'pattern' && <p>El campo Email no es correcto</p>}
                
                
                <input placeholder="Telefono" type="text" {...register('phone', {
                    required:true,
                })}   />
                {errors.phone?.type === 'required' && <p>El campo Telefono es obigatorio</p>}
                
            
            <button className={styles.sendButton} type="submit">Iniciar sesión</button>
            </div>
        </form>
        </div>
    );
}
