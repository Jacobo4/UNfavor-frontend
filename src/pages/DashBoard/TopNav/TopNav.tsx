import styles from "./TopNav.module.css";
import React from "react";
import {AiOutlineSearch} from 'react-icons/ai'
import {IoMdNotificationsOutline} from 'react-icons/io'
import ImageProfile from '../../../assets/images/avatar2.png'
const TopNav: React.FC = () => {
  
  return (
    <div className={styles.TopNav}>
        <div className={styles.wrapper}>
          <div className={styles.searchBox}>
            <input type="text" placeholder="Busqueda" name="" id="" />
            <span>
            <AiOutlineSearch/>
            </span>
          </div>
          <div className={styles.right}>
            <span className={styles.notification}>
              <IoMdNotificationsOutline/>
            </span>
            <div className={styles.profile}>
              <img src={ImageProfile} alt="" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default TopNav;
