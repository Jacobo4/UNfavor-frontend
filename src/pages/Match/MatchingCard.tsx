//Styles
import styles from "./MatchingCard.module.css";
import React from "react";

import { SlLike } from 'react-icons/Sl'; //Like icon  import
import { AiFillHeart } from 'react-icons/ai'; //Heart icon import
import { SlDislike } from 'react-icons/Sl'; //Dislike icon  import
import { TbHeartHandshake } from 'react-icons/Tb'; //Dislike icon  import
import { useState } from "react";

import fotoFavour1 from "@assets/images/favour1.jpg";

//
const MatchingCard: React.FC = () => {
  return (
    <div className={styles.MatchingCardContainer}>
        <img className={styles.ImageFavour} src={fotoFavour1} alt="Persona Pintando Casa" />
        <div className={styles.InfoContainer}>
            <div className={styles.InfoTextContainer}>
              <h3>Pintar fachada de casa</h3>
              <h4>Bogotá D.C</h4>
              <span>Pintar casa en Engativa de 70 metros cuadrados en máximo 3 dias habiles.</span>
            </div>
            <div className={styles.ButtonContainer}>
                <button className={styles.Buttons}>
                  <SlDislike></SlDislike>
                </button>
                <button className={styles.FavouriteButton}>
                  <TbHeartHandshake></TbHeartHandshake>
                </button>
                <button className={styles.Buttons}>
                  <SlLike></SlLike>
                </button>
            </div>
        </div>
    </div>
  );
};

export default MatchingCard;
