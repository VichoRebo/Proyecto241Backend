import React, { useState } from 'react';
import './App.css';
import LayoutComp from './features/layout'
import { IntlProvider } from 'react-intl';
import { LOCALES } from "./i18n/locales";
import { messages } from "./i18n/messages";
import Login from './features/Login';
import appfirebase from './features/Login/credenciales';
import {getAuth, onAuthStateChanged} from 'firebase/auth'
const auth = getAuth(appfirebase)
function App() {
  const [usuario, setUsuario] = useState(null)
  const locale = LOCALES.ENGLISH;
  onAuthStateChanged(auth, (usuarioFirebase)=>{
    if(usuarioFirebase){
      setUsuario(usuarioFirebase)
    }
    else{
      setUsuario(null)
    }
  })
  return (
    <IntlProvider locale={navigator.language} messages={messages[locale]} defaultLocale={LOCALES.ENGLISH}>
       <div className="App">
        {usuario? <LayoutComp correoUsuario={usuario.email}/>:<Login/> }
      </div>
    </IntlProvider>
   
  );
}

export default App;
