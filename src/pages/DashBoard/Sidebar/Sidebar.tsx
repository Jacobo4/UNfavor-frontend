import styles from "./Sidebar.module.css";
import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "@assets/images/logo.png";
import { AiOutlineLogout } from "react-icons/ai";
import navLinks from '@assets/dummy-data/navLinksSideBar.jsx'
const Sidebar: React.FC = () => {
  

  const navigate = useNavigate();
  const handleLogout = () => {};
  return (
      <div className={styles.Sidebar}>
        <div className={styles.SidebarTop}>
          <figure className={styles["logo"]}>
            <img src={logo} alt="" />
            <h1>UNfavor</h1>
          </figure>
        </div>
        <div className={styles.SidebarContent}>
          <div className={styles.menu}>
            <ul className={styles.navList}>
            {
                  navLinks.map((item, idx)=>
                  <li className={styles.navItem}>
                  <NavLink
                    to={item.path}
                    className={(navClass) =>
                      navClass.isActive ? styles.nav_active : styles.nav_link
                    }
                  >
                    {item.icon}
                    <span>{item.display}</span>
                  </NavLink>
                </li>
                  )
                }
            </ul>
          </div>
          <div className={styles.SidebarBottom}>
            <NavLink
              to="/"
              className={styles.SidebarBottomButton}
              onClick={() => handleLogout()}
            >
              <AiOutlineLogout />
              <span>Cerrar Sesión</span>
            </NavLink>
          </div>
        </div>
      </div>
      
    
  );
};

export default Sidebar;
