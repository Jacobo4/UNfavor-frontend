//Styles
import styles from "./SettingsProfile.module.css";
import React from "react";
import avatar from "@assets/images/avatar.png";
import { MdSettings } from "react-icons/md";
import SettingForm from "./SettingForm";

const SettingsProfile: React.FC = () => {
  return (
    <div>
      <div className={styles.background}>
        <div>
          <MdSettings />
          <h2>Settings</h2>
        </div>
      </div>
      <div className={styles.container}>
        <h3>Editar perfil</h3>
        <div className={styles.photo}>
          <img src={avatar} alt="" />
          
        </div>
        <div>
          <SettingForm/>
        </div>
      </div>
      <div className={styles.container}>
        <h3>Editar favor</h3>
      </div>
      <div className={styles.container}>
        <h3>Editar filtros</h3>
      </div>
    </div>
  );
};

export default SettingsProfile;
