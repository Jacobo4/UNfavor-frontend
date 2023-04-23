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
        <div className={styles["userInfo"]}>
          <figure className={styles["avatar"]}>
            <img src={avatar} alt="" />
          </figure>
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
      <div className={styles["favFilters"]}>
        <h2>Mis filtros de busqueda</h2>
        <div className={styles["filters"]}>
          <h3>Tipo de favor: </h3>
          <span>Limpieza</span>
          <h3>Distancia máxima: </h3>
          <span>Radio de 3km</span>
          <h3>Precio mínimo: </h3>
          <span>$24.000</span>
        </div>
      </div>
      <div className={styles["myFavor"]}>
        <h2>Mi Favor</h2>
        <h3>Titulo</h3>
        <p>
          Descripcion del favor Lorem ipsum dolor sit amet, consectetur
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
          ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <div>
          <h3>Categoria: </h3>
          <span>Académico </span>
          <h3>Fecha de publicación: </h3>
          <span>12/09/2020</span>
        </div>
      </div>
      <button>Editar perfil</button>
      <div className={styles["historial"]}>
        <h2>Historial</h2>

        <div className={styles["cardsContainer"]}>
          <div className={styles["card"]}>
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
          <div className={styles["card"]}>
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
          <div className={styles["card"]}>
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
          <div className={styles["card"]}>
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
          <div className={styles["card"]}>
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
      </div>
    </div>
  );
};

export default Profile;
