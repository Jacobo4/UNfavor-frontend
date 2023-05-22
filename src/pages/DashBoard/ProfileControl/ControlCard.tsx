import styles from "./ControlCard.module.css";
import React from "react";
import { BsFilePost } from "react-icons/bs";
import fotoFavour from "@assets/images/favor.png";
import { SlDislike, SlLike } from "react-icons/sl";
interface dataFavour {
  
  age: number;
  email: string;
  name: string;
  title?: string;
  description?: string;
  location?: string;
  
}
const ControlCard: React.FC<dataFavour> = ({
  age, email, name, title="Sin titulo", description="Sin descripción", location="Sin ubicación" ,
}) => {
  return (
    
    <div className={styles.ControlCardContainer}>
        
      <div className={styles.InfoContainer}>
        <div className={styles.InfoTextContainer}>
          <h3>Nombre:</h3>
          <span>{name}</span>
          <h3>Email:</h3>
          <span>{email}</span>
          <h3>Edad:</h3>
          <span>{age}</span>
          <h3>Favor:</h3>
          <span>{title}</span>
          <h3>Descripción:</h3>
          <span>{description}</span>
          <h3>Ubicacion:</h3>
          <span>{location}</span>
        </div>
        <div className={styles.ButtonContainer}>
          <button className={styles.rejectButton}>Denegar</button>
          <button className={styles.acceptButton}>Permitir</button>
        </div>
      </div>
    </div>
  );
};

export default ControlCard;
