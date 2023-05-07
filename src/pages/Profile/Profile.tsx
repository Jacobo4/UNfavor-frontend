//Styles
import styles from "./Profile.module.css";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import BottomNavigation from "@mui/material/BottomNavigation";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import { BiUser, BiHistory } from "react-icons/bi";
import Rating from "@mui/material/Rating";
import Button, { ButtonProps } from "@mui/material/Button";
import avatar from "@assets/images/avatar.png";
import favor from "@assets/images/favor.png";
import { IoLocation } from "react-icons/io5";
import { getProfileInfo } from "@store/user/userAsyncAction";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { MdReport } from "react-icons/md";
import { Link } from "react-router-dom";

const ReportUser = styled(Button)({
  margin: "8px 0px",
  justify: " baseline",
  align: "end",
  width: "fit-content",
  '&:hover': {
    transform: 'translateY(-0.2em)',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.45)',
  },
  
});

const buttonNavigation = styled(BottomNavigationAction)({
    color: "var(--deepPurple)",
    padding: "0px",
    fontSize: "24px",
});
const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const [userOpen, setUserOpen] = useState(true);
  const [historialOpen, setHistorialOpen] = useState(!userOpen);
  const { userInfo } = useAppSelector((state) => state.user);

  useEffect(() => {
    if (!userInfo) {
      dispatch(getProfileInfo());
      console.log(userInfo);
    }
  }, []);

  return (
    userInfo && (
      <div className={styles["Profile"]}>
        <section className={styles["profileData"]}>
          <figure className={styles["avatar"]}>
            <img
              src="https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
            />
          </figure>
          <div className={styles["info"]}>
            <div className={styles["userInfo"]}>
              <h2>{userInfo.name}</h2>
              <div>
                <IoLocation />
                <span>{userInfo.favor.location}</span>
              </div>
            </div>
            <div className={styles["Raitings"]}>
              <h3>Calificación Promedio</h3>
              <div className={styles["stars"]}>
                <h4>3,5</h4>
                <Rating size="large" precision={0.5} value={3.5} readOnly />
              </div>
              <h3>Favores Realizados</h3>
              <h4>13</h4>
            </div>
            <ReportUser variant="outlined" color="error">
              Reportar usuario
              <MdReport />
            </ReportUser>
          </div>
        </section>
        <div className={styles["nav"]}>
            <button
                onClick={() =>{ setUserOpen(!userOpen); setHistorialOpen(!historialOpen);}}
                className={(userOpen)?styles["active"] : styles["disabled"]}
            >
                <BiUser />
                Información del usuario
            </button>
            <button
                onClick={() =>{ setUserOpen(!userOpen); setHistorialOpen(!historialOpen);}}
                className={(historialOpen)?styles["active"] : styles["disabled"]}
            >
                <BiHistory />
                Historial
            </button>
          </div>
        <section className={styles["user"]}>
          
          {userOpen && !historialOpen && (
          <div className={styles["userContainer"]}>
            <h2>Sobre el usuario</h2>
            <div className={styles["aboutUser"]}>
              <h3>E-mail: </h3>
              <span>{userInfo.email}</span>
              <h3>Filtros</h3>
              <div>
                <h3>Tipo de favor: </h3>
                <span>{userInfo.preferences.favor_filters.favor_type}</span>
                <h3>Distancia máxima: </h3>
                <span>
                  Radio de {userInfo.preferences.favor_filters.max_distance_km}
                  km
                </span>
              </div>
              <h3>Favor </h3>
              <div>
                <h3>{userInfo.favor.title}</h3>
                <p>{userInfo.favor.description}</p>
                <div>
                  <h3>Ubicación: </h3>
                  <span>{userInfo.favor.location} </span>
                </div>
              </div>
            </div>
          
          <button className={styles["settings"]}>
          <Link to={"/user/settings"}>Editar perfil</Link>
            </button>
            </div>
            )}
            {historialOpen && !userOpen && (
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
                  </div>
                </div>
              </div>
            )}
        </section>
        
        
        
        
      </div>
    )
  );
};

export default Profile;
