import styles from "./ControlCard.module.css";
import React from "react";
// Redux
import {controlFavor } from "@store/Admin/adminAsyncActions";
import { useAppDispatch } from "@store/hooks";
import { useNavigate } from "react-router-dom";

type favorAction = {
    userId: string;
    action: string;
}

interface dataFavour {
  
  age: number;
  email: string;
  name: string;
  title?: string;
  description?: string;
  location?: string;
  userId: string;
  
}
const ControlCard: React.FC<dataFavour> = ({
  age, email, name, title="Sin titulo", description="Sin descripción", location="Sin ubicación" , userId
}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleAccept = () => {
        const data: favorAction = {
            userId: userId,
            action: "PUBLISHED",
        }
        dispatch(controlFavor(data));
        console.log("PUBLISHED");
        window.location.reload();
    }
    const handleReject = () => {
        const data: favorAction = {
            userId: userId,
            action: "DENIED"
        }
        dispatch(controlFavor(data));
        console.log("DENIED");
        window.location.reload();
    }

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
          <button onClick={handleReject} className={styles.rejectButton}>Denegar</button>
          <button onClick={handleAccept} className={styles.acceptButton}>Permitir</button>
        </div>
      </div>
    </div>
  );
};

export default ControlCard;
