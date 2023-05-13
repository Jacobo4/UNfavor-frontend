// Core
import React, { useEffect, useState } from "react";
// Router
import { Link } from "react-router-dom";
// Redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getProfileInfo } from "@store/user/userAsyncAction";
//Styles
import styles from "./Profile.module.css";
// Icons
import { BiUser, BiHistory } from "react-icons/bi";
import { IoLocation } from "react-icons/io5";
import { MdReport } from "react-icons/md";
// Images
import avatar from "@assets/images/avatar.png";
// Mui
import { ThemeProvider, createTheme, styled, colors} from "@mui/material";
import BottomNavigationAction from "@mui/material/BottomNavigationAction";
import Rating from "@mui/material/Rating";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


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
const theme = createTheme({
  palette: {
    primary: {
      light: '#807cf6',
      main: '#615CF4',
      dark: '#4340aa',
      contrastText: '#fff',
    },
    secondary: {
      light: '#33dcb7',
      main: '#00D4A6',
      dark: '#009474',
      contrastText: '#000',
    },
    error:{
      light: '#ff7b83',
      main: '#FF5B64',
      dark: '#b23f46',
    }
  },
});
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#00D4A6",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#00D4A6",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#00D4A6",
    },
  },
});
// Dommie historical
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
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    console.log(userInfo);
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
                <h4>{userInfo.user_reviews_avg}</h4>
                <Rating
                  size="large"
                  precision={0.5}
                  value={userInfo.user_reviews_avg}
                  readOnly
                />
              </div>
              <h3>Favores Realizados</h3>
              <h4>{userInfo.user_reviews_num}</h4>
            </div>
            <ReportUser
              variant="outlined"
              color="error"
              onClick={handleClickOpen}
            >
              Reportar usuario
              <MdReport />
            </ReportUser>
            <ThemeProvider theme={theme}>
            <Dialog open={open} onClose={handleClose}>
              <DialogTitle>¿Estas seguro de reportar a este usuario?</DialogTitle>
              <DialogContent>
                <DialogContentText>
                  Por favor describe el motivo de tu reporte para que podamos dar una solución al problema.
                </DialogContentText>
                <TextField
                  multiline
                  autoFocus
                  margin="dense"
                  id="reason"
                  label="Descripción del reporte" 
                  type="text"
                  fullWidth
               
                  variant="standard"
                />
              </DialogContent>
              <DialogActions>
                <Button color="error" onClick={handleClose}>Cancelar</Button>
                <Button color="secondary" onClick={handleClose}>Reportar</Button>
                
                

              </DialogActions>
            </Dialog>
            </ThemeProvider>
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
                      <Rating value={h.rate} readOnly />
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
