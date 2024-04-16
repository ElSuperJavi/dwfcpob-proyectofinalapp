import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {Inicio} from '../principal/Inicio'
import {Login} from '../usuario/Login'
import {Registro} from '../usuario/Registro'
import './Usuario.css'; // Asegúrate de importar tu archivo CSS
import '../../components/layout/Layout.css' // Asegúrate de importar tu archivo CSS

export const Usuario=()=>{
  const [activeTab, setActiveTab]=useState('login');

  const handleTabChange=(tab)=>{
    setActiveTab(tab);
  };

  return (
    <>
    <section className="cuerpo">
      <div className="usuario-contenedor">
        <div className="formulario-tabs">
          <div
            className={`tab ${activeTab==='login'?'active':''}`}
            onClick={()=>handleTabChange('login')}
          >
            Iniciar sesión
          </div>
          <div
            className={`tab ${activeTab==='register'?'active':''}`}
            onClick={()=>handleTabChange('register')}
          >
            Crear Cuenta
          </div>
        </div>
        {/* Contenido del formulario según la pestaña activa */}
        <div className="formulario-contenido">
            {activeTab === 'login' ?
              <>
              <Login/>
              <div className="enlace">
                <Link onClick={()=>handleTabChange('register')}>
                  Crear cuenta <i class="fa fa-sign-in" aria-hidden="true"></i>
                </Link>
              </div>
              </>
              :
              <>
              <Registro/>
              <div className="enlace">
                <Link onClick={()=>handleTabChange('login')}>
                  Tengo una cuenta <i class="fa fa-sign-out" aria-hidden="true"></i>
                </Link>
              </div>
              </>
            }
        </div>
      </div>
    </section>
    </>
  );
}