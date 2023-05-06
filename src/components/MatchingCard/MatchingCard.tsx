import React from "react";
// Motion
import { motion,  HTMLMotionProps  } from "framer-motion";
// Styles
import styles from "./MatchingCard.module.css";
//Icons
import { SlLike, SlDislike } from "react-icons/sl";
//Images
import fotoFavour1 from "@assets/images/favour1.jpg";
interface IProps {
    motionProps?: HTMLMotionProps<"div">,
    customStyles?: string
}
const MatchingCard = ({motionProps, customStyles}: IProps) => {
  return (
    <div className={`${styles["container"]} ${customStyles}`}>
      <motion.div {...motionProps}  className={styles["card"]} >
        <img
          className={styles.ImageFavour}
          src={fotoFavour1}
          alt="Persona Pintando Casa"
          draggable={false}
        />
        <div className={styles.InfoContainer}>
          {/*Texts*/}
          <div className={styles.InfoTextContainer}>
            <h3>Pintar fachada de casa</h3>
            <h4>Bogotá D.C</h4>
            <span>
              Pintar casa en Engativa de 70 metros cuadrados en máximo 3 dias
              habiles.
            </span>
          </div>

          {/*Buttons*/}
          <div className={styles.ButtonContainer}>
            <button className={styles.ButtonDis}>
              <SlDislike></SlDislike>
            </button>

            <button className={styles.ButtonLike}>
              <SlLike></SlLike>
            </button>
          </div>

        </div>
      </motion.div>
    </div>
  );
};

export default MatchingCard;
