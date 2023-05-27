// Core
import React, { useEffect, useState } from "react";
// Router
import { Link, useNavigate } from "react-router-dom";
// Styles
import styles from "./Header.module.css";
// Icons
import { BsSearch } from "react-icons/bs";
import { AiOutlinePlusCircle } from "react-icons/ai";
import { TiMessages } from "react-icons/ti";
import { FiMenu } from "react-icons/fi";
// Images
import avatar from "@assets/images/avatar.png";
import logo from "@assets/images/logo.png";
import { logout } from "@store/auth/authSlice";
//Redux
import { getProfileInfo, UserProfile } from "@store/user/userAsyncAction";
import { useAppDispatch, useAppSelector } from "@store/hooks";
//Framer motion
import { motion } from "framer-motion";
import { navVariants } from "@globalStyles/motion";

import { Button, Menu, MenuItem, Fade } from "@mui/material/";

const urlImage = "https://api.dicebear.com/6.x/adventurer/svg?seed=";

const Header: React.FC = () => {
  const { isLogged } = useAppSelector((state) => state.auth);
  const [isOpen, toggleMenu] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleMenuClick = () => {
    toggleMenu(!isOpen);
  };
  const { myUserInfo } = useAppSelector((state) => state.user);
  const handleLogout = () => {
    dispatch(logout());
    navigate("/");
    // location.reload();
  };

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const { token } = useAppSelector((state) => state.auth);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleCloseDropMenu = () => {
    setAnchorEl(null);
  };

  return (
    <motion.nav variants={navVariants} initial="hidden" whileInView="show">
      <div className={styles["Header"]}>
        <button onClick={handleMenuClick} type={"button"}>
          <FiMenu />
        </button>

        <Link to={"/"} className={styles["link"]}>
          <figure className={styles["logo"]}>
            <img src={logo} alt="" />
            <h1>UNfavor</h1>
          </figure>
        </Link>

        {isLogged && (
          <>
            <div className={styles["dropDownMenu"]}>
              <Button
                id="buttonDropDown"
                className={styles["buttonDropDown"]}
                aria-controls={open ? "fade-menu" : undefined}
                aria-haspopup="true"
                aria-expanded={open ? "true" : undefined}
                onClick={handleClick}
              >
                <figure className={styles["avatar"]}>
                  <img src={urlImage + token.email} alt="" />
                </figure>
              </Button>

              <Menu
                id="fade-menu"
                MenuListProps={{
                  "aria-labelledby": "buttonDropDown",
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleCloseDropMenu}
                TransitionComponent={Fade}
              >
                <MenuItem onClick={() => navigate("/user")}>Perfil</MenuItem>
                <MenuItem onClick={() => navigate("/user/settings")}>
                  Configuración
                </MenuItem>
                <MenuItem onClick={handleLogout}>Cerrar Sesión</MenuItem>
              </Menu>
            </div>

            <nav
              className={`${styles["menu"]} ${
                !isOpen ? styles["menu--close"] : ""
              }`}
            >
              <ul>
                {/*<li>*/}
                {/*    <Link to="/">Buscar favores <BsSearch/></Link>*/}
                {/*</li>*/}
                {/*<span className={styles['line']}></span>*/}

                <li>
                  <Link to="/match">
                    ¡Favores!
                    <AiOutlinePlusCircle />
                  </Link>
                </li>
                <span className={styles["line"]}></span>
                <li>
                  <Link to="/monitor">
                    Mis favores <TiMessages />
                  </Link>
                </li>
                <span className={styles["line"]}></span>
              </ul>
            </nav>
          </>
        )}
      </div>
    </motion.nav>
  );
};

export default Header;
