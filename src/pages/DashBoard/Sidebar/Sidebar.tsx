import styles from "./Sidebar.module.css";
import React from "react";
import { NavLink , useNavigate} from "react-router-dom";
import logo from "@assets/images/logo.png";
import {AiOutlineLineChart, AiOutlineLogout} from 'react-icons/ai';
import {FiSettings} from 'react-icons/fi';
import {MdAdminPanelSettings} from 'react-icons/md'
const Sidebar: React.FC = () => {
  const navigate = useNavigate();
  const handleLogout=()=>{
    
  };
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
            <li className={styles.navItem} >
            <NavLink to="/admin/dashboard" className={navClass=>navClass.isActive? styles.nav_active :styles.nav_link}>
            <AiOutlineLineChart/>
              Dashboard
            </NavLink>
            </li>
            <li className={styles.navItem} >
            <NavLink to="/admin/profilecontrol" className={navClass=>navClass.isActive? styles.nav_active  :styles.nav_link}>
            <AiOutlineLineChart/>
              Control de Perfiles
            </NavLink>
            </li>
            <li className={styles.navItem} >
            <NavLink to="/admin/settings" className={navClass=>navClass.isActive? styles.nav_active :styles.nav_link}>
            <FiSettings/>
              Configuraciones
            </NavLink>
            </li>
            
            
          </ul>
        </div>
        <div className={styles.SidebarBottom}>
          <NavLink to="/" className={styles.SidebarBottomButton} onClick={()=>handleLogout()}>
            <AiOutlineLogout/>
              Cerrar Sesión
            </NavLink>
      </div>
      </div>
      
    </div>
  );
};

export default Sidebar;
