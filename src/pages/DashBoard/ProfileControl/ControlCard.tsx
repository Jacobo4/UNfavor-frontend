import styles from "./ControlCard.module.css";
import React from "react";
import {BsFilePost} from 'react-icons/bs'
import fotoFavour from '@assets/images/favor.png'
import {SlDislike, SlLike} from 'react-icons/sl'
interface dataFavour{
    title: string,
    profile: string,
    ubication: string,
    description: string,
    state: string,
}
const ControlCard: React.FC = ({title, profile, ubication, description,state}:dataFavour) => {
  
    return (
        <div className={styles.ControlCardContainer}>
            <img className={styles.ImageFavour} src={fotoFavour} alt="Persona Pintando Casa" />
            <div className={styles.InfoContainer}>
                <div className={styles.InfoTextContainer}>
                    <h3>Favor:</h3>
                  <span>{title}</span>
                  <h3>Ubicacion:</h3>
                  <span>{ubication}</span>

                  <h3>Perfil:</h3>
                  <span>{profile}</span>
                  <h3>Descripción:</h3>
                  <span>{description}</span>
                </div>
                <div className={styles.ButtonContainer}>
                <button className={styles.rejectButton}>
                    Denegar
                    </button>
                    <button className={styles.acceptButton}>
                      Permitir
                    </button>
                    
                </div>
            </div>
        </div>
      );
};

export default ControlCard;
