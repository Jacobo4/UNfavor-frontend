//Styles
import styles from "./SettingsProfile.module.css";
import React from "react";
import avatar from "@assets/images/avatar.png";
import { MdSettings } from "react-icons/md";
import SettingForm from "./SettingForm";

const SettingsProfile: React.FC = () => {
  return (
    <div>
      <div className={styles.backgrund}>
        <div>
          <MdSettings />
          <h2>Settings</h2>
        </div>
      </div>
      <div>
        <h3>Public Profile</h3>
        <div className={styles.photo}>
          <img src={avatar} alt="" />
          <button>Editar</button>
          <button>Eliminar</button>
        </div>
        <div>
          <SettingForm/>
        </div>
      </div>
    </div>
  );
};

export default SettingsProfile;
