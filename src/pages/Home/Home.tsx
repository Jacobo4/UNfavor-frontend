//Styles
import styles from "./Home.module.css";
import React from "react";
import logo from "@assets/images/logo.png";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import avatar from "@assets/images/avatar.png";
import { ReactComponent as TopDecor } from "@assets/images/login/loginTopDecor.svg";
import { ReactComponent as BottomDecor } from "@assets/images/login/loginBottomDecor.svg";
import { ReactComponent as SideBgDecor } from "@assets/images/login/bgDecor.svg";
import { ReactComponent as SideDecor } from "@assets/images/login/loginDecor.svg";
import {Link} from "react-router-dom";
import {useAppSelector} from "@store/hooks";
const Home: React.FC = () => {
  const {isLogged} = useAppSelector(state => state.auth);

  return (
    <div className={styles["Home"]}>
      <div className={styles["Info"]}>
        <figure className={styles["logo"]}>
          <img src={logo} alt="" />
        </figure>
        <h1>UNFavor</h1>
        <h2>Haz la diferencia en tu comunidad, un favor a la vez</h2>
        { !isLogged &&
            <div className={styles["buttonsContainer"]}>
          <Link to={"/auth/signin"}>Registrarme</Link>
          <Link to={"/auth/login"}>Iniciar Sesión</Link>
          <a href="/#Info" className={styles["buttonInfo"]}>
            Más Información
          </a>
          <a href="/#credits" className={styles["buttonInfo"]}>
            Créditos
          </a>
        </div>

        }
      </div>
      <div id="Info" className={styles["Info"]}>
        <h1>Ofrece favores y recibe otros a cambio</h1>
        <h2>
          UNFavor te permite ofrecer tus servicios como favores y encontrar
          personas que ofrezcan los servicios que buscas, permitiendo un
          intercambio
        </h2>
        <div className={styles["ilustration"]}>
          <SideDecor></SideDecor>
        </div>
      </div>
      <div id="Info" className={styles["Info"]}>
        <h1>
          ¿Necesitas ayuda? La comunidad está aquí para ti con nuestro
          intercambio de favores.
        </h1>
        <h2>
          UNFavor te permite ofrecer tus servicios como favores y encontrar
          personas que ofrezcan los servicios que buscas, permitiendo un
          intercambio
        </h2>
      </div>
      <div id="credits" className={styles["Info"]}>
        <h1>Creadores</h1>
        <div className={styles["credits"]}>
          <Stack direction="row" spacing={2}>
            <div>
              <div>
                <Avatar
                  alt="Juan Jacobo Izquierdo Becerra"
                  src={avatar}
                  sx={{ width: 72, height: 72 }}
                />
                <span>Juan Jacobo Izquierdo Becerra</span>
              </div>
              <div>
                <Avatar
                  alt="Natalia Andrea Quiroga Castillo"
                  src={avatar}
                  sx={{ width: 72, height: 72 }}
                />
                <span>Natalia Andrea Quiroga Castillo</span>
              </div>
              <div>
                <Avatar
                  alt="Fabian Leandro Lopez Gomez"
                  src={avatar}
                  sx={{ width: 72, height: 72 }}
                />
                <span>Fabian Leandro Lopez Gomez</span>
              </div>
              <div>
                <Avatar
                  alt="Ivan Yared Lombana Lozano"
                  src={avatar}
                  sx={{ width: 72, height: 72 }}
                />
                <span>Ivan Yared Lombana Lozano</span>
              </div>
              <div>
                <Avatar
                  alt="Juan Camilo Zambrano Lopez"
                  src={avatar}
                  sx={{ width: 72, height: 72 }}
                />
                <span>Juan Camilo Zambrano Lopez</span>
              </div>
              <div>
                <Avatar
                  alt="Nicolas David Galindo Carvajal"
                  src={avatar}
                  sx={{ width: 72, height: 72 }}
                />
                <span>Nicolas David Galindo Carvajal</span>
              </div>
            </div>
          </Stack>
        </div>
      </div>
    </div>
  );
};

export default Home;
