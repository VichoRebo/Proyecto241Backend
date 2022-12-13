import React, { useState } from 'react'
import firebaseApp from '../credenciales'
import {getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword} from 'firebase/auth'
const auth = getAuth(firebaseApp)

const Login = () => {
    const [registrando, setRegistrando] = useState(false)

    const handlerSubmit = async(e)=>{
        e.preventDefault();
        const correo = e.target.email.value;
        const contraseña = e.target.password.value;

        if(registrando){
            await createUserWithEmailAndPassword(auth, correo, contraseña)
        }
        else{
            await signInWithEmailAndPassword(auth, correo, contraseña)
        }
    }
    return(
            <div>
                <h1>{registrando? 'Registrate':'Iniciarsesion'}</h1>
                <form onSubmit={handlerSubmit}>
                    <div>
                        <label>Email: </label>
                        <input type="email" placeholder='Ingresar email' id='email'/>
                    </div>
                    <div>
                        <label>Password: </label>
                        <input type="password" placeholder='Ingresar password' id='password'/>
                    </div>
                    <button type='submit'>
                        {registrando? 'Registrate':'Iniciar sesion'}
                    </button>
                </form>
                <div>
                    <button type='submit' onClick={()=>setRegistrando(!registrando)}>
                        {registrando? 'Ya tienes cuenta? Inicia sesion':'no tienes cuenta? Registrate'}
                    </button>
                </div>
            </div>
        );
}
export default Login