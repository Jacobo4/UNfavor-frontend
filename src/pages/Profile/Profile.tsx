//Styles
import styles from './Profile.module.css'
import React from "react";
import Raiting from "./Raiting";
import avatar from "@assets/images/avatar.png";

const Profile: React.FC = () => {

  return (
    <div className={styles['Profile']}>
        <nav>

        </nav>
        <div>
            <figure className={styles['avatar']}>
                <img src={avatar} alt="" />
            </figure>
            <h2>Juana Perez</h2>
            <span>juana_paint</span>
            <div>
                <h3>Favores Realizados</h3>
                <span>13</span>
                <h3>Calificación Promedio</h3>
                <div>
                    <Raiting/>
                </div>
            </div>
        </div>
        <div>
            <h2>Historial</h2>
            <h3>Finalizada</h3>
            <h2>Pintar Fachada de Casa</h2>
            <img src="" alt="" />
            <h3>Fecha realización:</h3>
            <span>14/03/2023</span>
            <h3>Favor realizado para:</h3>
            <figure className={styles['avatar']}>
                <img src={avatar} alt="" />
            </figure>
            <h3>Calificación:</h3>
            <Raiting/>
        </div>
    </div>
  )
}

export default Profile
