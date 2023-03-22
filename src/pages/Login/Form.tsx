import React from 'react'
import { useForm } from 'react-hook-form'

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
        <main>
        <form onSubmit={onSubmit}>
            <div>
                <label>Email</label>
                <input type="text" {...register('email', {
                    required:true,
                    pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
                })} />
                {errors.email?.type === 'required' && <p>El campo Email es obigatorio</p>}
                {errors.email?.type === 'pattern' && <p>El campo Email no es correcto</p>}
            </div>
            <div>
                <label>Password</label>
                <input type="password" {...register('password', {
                    required:true,
                })}   />
                {errors.password?.type === 'required' && <p>El campo Password es obigatorio</p>}
            </div>
            
            <button type="submit">Iniciar sesión</button>
        </form>
        </main>
    );
}
// return (
//     <main>
//     <form onSubmit={onSubmit}>
//         <div>
//             <label>Email</label>
//             <input type="text" {...register('email', {
//                 pattern: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i
//             })} />
//             {errors.email.type === 'pattern' && <p>El campo Email es obigatorio</p>}
//         </div>
//         <div>
//             <label>Password</label>
//             <input type="password" {...register('password', {
//                 required:true,
//             })}   />
//             {errors.password.type === 'required' && <p>El campo Password es obigatorio</p>}
//         </div>
        
//         <button type="submit">Iniciar sesión</button>
//     </form>
//     </main>
// );
// }