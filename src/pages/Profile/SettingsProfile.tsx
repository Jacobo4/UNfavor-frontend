//Styles
import styles from "./SettingsProfile.module.css";
import React from "react";
import avatar from "@assets/images/avatar.png";
import { MdSettings } from "react-icons/md";
import SettingForm from "./Forms/SettingForm";
import FavorForm from "./Forms/FavorForm";
import FilterForm from "./Forms/FilterForm";

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
        <h2>Editar perfil</h2>
        <div className={styles.photo}>
          <img src={avatar} alt="" />
          
        </div>
        <div>
          <SettingForm/>
        </div>
      </div>
      <div className={styles.container}>
        <h2>Editar favor</h2>
        <FavorForm />
      </div>
      <div className={styles.container}>
        <h2>Editar filtros</h2>
        <FilterForm />
      </div>
    </div>
  );
};

export default SettingsProfile;
