//Styles
import styles from './Home.module.css'
import React from "react";
import logo from "@assets/images/logo.png";

import {ReactComponent as TopDecor} from "@assets/images/login/loginTopDecor.svg";
// @ts-ignore
import {ReactComponent as BottomDecor} from "@assets/images/login/loginBottomDecor.svg";
// @ts-ignore
import {ReactComponent as SideBgDecor} from "@assets/images/login/bgDecor.svg";
// @ts-ignore
import {ReactComponent as SideDecor} from "@assets/images/login/loginDecor.svg";
const Home: React.FC = () => {

  return (
    <div className={styles['Home']}>
        <div className={styles['Info']}>
        <figure className={styles['logo']}>
                <img src={logo} alt="" />
            </figure>
            <h1>UNFavor</h1>
            <h2>Sitio Web para intercambio de Favores</h2>
            <div className={styles["buttonsContainer"]}>
              <a href="/Register">
                Registrarme
              </a>
              <a href="/Login">
                Iniciar Sesión
              </a>
              
            </div>
            <a href="/#Info" className={styles['buttonInfo']}>Más Información</a>
        </div>
        <div id="Info"className={styles['Info']}>
          <h1>Ofrece favores y recibe otros a cambio</h1>
          <h2>UNFavor te permite ofrecer tus servicios como favores y encontrar personas que ofrezcan los servicios que buscas, permitiendo un intercambio</h2>
          <div className={styles['ilustration']}>
            <SideDecor></SideDecor>
          </div>
        </div>
        <div id="Info"className={styles['Info']}>
          <h1>Ofrece favores y recibe otros a cambio</h1>
          <h2>UNFavor te permite ofrecer tus servicios como favores y encontrar personas que ofrezcan los servicios que buscas, permitiendo un intercambio</h2>
          
        </div>
        
        
    </div>
  )
}

export default Home
