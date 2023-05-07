//Styles
import styles from "./Profile.module.css";
import React, { useEffect } from "react";
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
// import RestoreIcon from '@mui/icons-material/Restore';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import LocationOnIcon from '@mui/icons-material/LocationOn';
import Rating from "@mui/material/Rating";
import Button from '@mui/material/Button';
import avatar from "@assets/images/avatar.png";
import favor from "@assets/images/favor.png";
import { IoLocation } from "react-icons/io5";
import { getProfileInfo } from "@store/user/userAsyncAction";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { MdReport } from "react-icons/md";
import { Link } from "react-router-dom";

const Profile: React.FC = () => {
  const dispatch = useAppDispatch();
  const [value, setValue] = React.useState(0);
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
                <span>Location</span>
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
            <Button variant="outlined" color="error">
                
                  Reportar usuario
                  <MdReport />
            </Button>
              
           
          </div>
        </section>
        <section className={styles["navigation"]}>
        <Box sx={{ width: 500 }}>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="Recents"/>
        <BottomNavigationAction label="Favorites"  />
        <BottomNavigationAction label="Nearby"  />
      </BottomNavigation>
    </Box>
        </section>
        <div className={styles["favFilters"]}>
          <h2>Mis filtros de busqueda</h2>
          <div className={styles["filters"]}>
            <h3>Tipo de favor: </h3>
            <span>{userInfo.preferences.favor_filters.favor_type}</span>
            <h3>Distancia máxima: </h3>
            <span>
              Radio de {userInfo.preferences.favor_filters.max_distance_km}km
            </span>
          </div>
        </div>
        <div className={styles["myFavor"]}>
          <h2>Mi Favor</h2>
          <h3>{userInfo.favor.title}</h3>
          <p>{userInfo.favor.description}</p>
          <div>
            <h3>Ubicación: </h3>
            <span>{userInfo.favor.location} </span>
          </div>
        </div>
        <button className={styles["settings"]}>
          <Link to={"/user/settings"}>Editar perfil</Link>
        </button>
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
      </div>
    )
  );
};

export default Profile;
