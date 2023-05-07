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
  justify: "end",
  align: "end",
  width: "fit-content",
  "&:hover": {
    transform: "translateY(-0.2em)",
    boxShadow: "0px 4px 4px rgba(0, 0, 0, 0.45)",
  },
});
const historial = [
  {
    state: "Finalizado",
    title: "Paseo de perro",
    img:
      "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "12/10/2021",
    to: "admi",
    rate: 2.5,
  },
  {
    state: "Finalizado",
    title: "Cocinar",
    img:
      "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "23/12/2022",
    to: "Lau",
    rate: 2.5,
  },
  {
    state: "Finalizado",
    title: "Paseo de perro",
    img:
      "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "12/10/2021",
    to: "admi",
    rate: 2.5,
  },
  {
    state: "Finalizado",
    title: "Cocinar",
    img:
      "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "23/12/2022",
    to: "Lau",
    rate: 2.5,
  },
  {
    state: "Finalizado",
    title: "Paseo de perro",
    img:
      "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "12/10/2021",
    to: "admi",
    rate: 2.5,
  },
  {
    state: "Finalizado",
    title: "Cocinar",
    img:
      "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "23/12/2022",
    to: "Lau",
    rate: 2.5,
  },
  {
    state: "Finalizado",
    title: "Paseo de perro",
    img:
      "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "12/10/2021",
    to: "admi",
    rate: 2.5,
  },
  {
    state: "Finalizado",
    title: "Cocinar",
    img:
      "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    date: "23/12/2022",
    to: "Lau",
    rate: 2.5,
  },
];
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
      <main className={styles["Profile"]}>
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

        <section className={styles["user"]}>
          <div className={styles["nav"]}>
            <button
              onClick={() => {
                setUserOpen(!userOpen);
                setHistorialOpen(!historialOpen);
              }}
              className={userOpen ? styles["active"] : styles["disabled"]}
            >
              <BiUser />
              Información del usuario
            </button>
            <button
              onClick={() => {
                setUserOpen(!userOpen);
                setHistorialOpen(!historialOpen);
              }}
              className={historialOpen ? styles["active"] : styles["disabled"]}
            >
              <BiHistory />
              Historial
            </button>
          </div>
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
                    Radio de{" "}
                    {userInfo.preferences.favor_filters.max_distance_km}
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
              {historial.map((h) => (
                
                  <div className={styles["card"]}>
                    <h4>{h.state}</h4>
                    <h2>{h.title}</h2>
                    <figure className={styles["imgFav"]}>
                      <img src={h.img} alt="" />
                    </figure>
                    <h3>Fecha realización:</h3>
                    <span>{h.date}</span>
                    <h3>Favor realizado para:</h3>
                    <figure className={styles["avatarHist"]}>
                      <img src={avatar} alt="" />
                    </figure>
                    <span>{h.to}</span>
                    <h3>Calificación:</h3>
                    <div>
                        <Rating
                     
                      
                      value={h.rate}
                      readOnly
                    />
                    </div>
                  </div>
                
              ))}
              </div>
            </div>
          )}
        </section>
      </main>
    )
  );
};

export default Profile;
