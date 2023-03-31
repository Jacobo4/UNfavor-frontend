//Styles
import styles from "./Profile.module.css";
import React from "react";
import Raiting from "./Raiting";
import avatar from "@assets/images/avatar.png";
import favor from "@assets/images/favor.png";

const Profile: React.FC = () => {
  return (
    <div className={styles["Profile"]}>
      
      <div className={styles["profileData"]}>
        <figure className={styles["avatar"]}>
          <img src={avatar} alt="" />
        </figure>
        <div className={styles["userInfo"]}>
        <h2>Juana Perez</h2>
        <span>juana_paint</span>
        </div>
        <div className={styles["divRaitings"]}>
          <h3>Favores Realizados</h3>
          <span>13</span>
          <h3>Calificación Promedio</h3>
          
          <Raiting />
          
        </div>
      </div>
      <div className={styles["historial"]}>
        <h2>Historial</h2>
        
          <h4>Finalizada</h4>
          <h2>Pintar Fachada de Casa</h2>
          <figure className={styles["imgFav"]}>
            <img src={favor} alt="" />
          </figure> 
          <h3>Fecha realización:</h3>
          <span>14/03/2023</span>
          <h3>Favor realizado para:</h3>
          <figure className={styles["avatarHist"]}>
            <img src={avatar} alt="" />
          </figure>
          <h3>Calificación:</h3>
          <Raiting />
        
      </div>
    </div>
  );
};

export default Profile;
