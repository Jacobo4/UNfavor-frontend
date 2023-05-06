import React from "react";
import styles from "./Card3d.module.css";
import { SlLike } from "react-icons/sl"; //Like icon  import
import { AiFillHeart } from "react-icons/ai"; //Heart icon import
import { SlDislike } from "react-icons/sl"; //Dislike icon  import
import { TbHeartHandshake } from "react-icons/tb"; //Dislike icon  import
import { useState } from "react";

import fotoFavour1 from "@assets/images/favour1.jpg";
import image3d from "@assets/images/image3d.svg";
import { motion } from "framer-motion";
import { useMotionValue, useTransform } from "framer-motion";

const Card3d = () => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-100, 100], [30, -30]);
  const rotateY = useTransform(x, [100, -100], [-30, 30]);
  return (
    <div style={{perspective:2000}}
    className={styles["container"]}
    >
      <motion.div
        style={{ x, y, rotateX, rotateY, z: 100 }}
        drag
        dragElastic={1}
        dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
        whileHover ={{ cursor: "pointer"}}
        className={styles["card"]}
      >
        <img
          className={styles.ImageFavour}
          src={fotoFavour1}
          alt="Persona Pintando Casa"
          draggable={false}
        />
        <div className={styles.InfoContainer}>
          <div className={styles.InfoTextContainer}>
            <h3>Pintar fachada de casa</h3>
            <h4>Bogotá D.C</h4>
            <span>
              Pintar casa en Engativa de 70 metros cuadrados en máximo 3 dias
              habiles.
            </span>
          </div>
          <div className={styles.ButtonContainer}>
            <button className={styles.ButtonDis}>
              <SlDislike></SlDislike>
            </button>
            {/* <button className={styles.FavouriteButton}>
              <TbHeartHandshake></TbHeartHandshake>
            </button> */}
            <button className={styles.ButtonLike}>
              <SlLike></SlLike>
            </button>
          </div>
          {/* <motion.div 
          
          className={styles.image3d}>
            <img src={image3d} alt="" draggable={false}/>
          </motion.div> */}
        </div>
      </motion.div>
    </div>
  );
};

export default Card3d;
