//Styles
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";
import React from "react";
import logo from "@assets/images/logo.png";
//Framer motion
import { motion } from "framer-motion";
import { slideIn, staggerContainer, textVariant } from "../../styles/motion";
//icons
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer: React.FC = () => {
  return (
    <div className={styles["Footer"]}>
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="onScreen"
        viewport={{ once: false, amount: 0.25 }}
      >
        <div className={styles["Info"]}>
          <figure className={styles["logo"]}>
            <motion.div
              animate={{
                rotate: [300, 0, 0, 300, 0],
                borderRadius: ["0%", "0%", "50%", "50%", "0%"],
              }}
              transition={{
                duration: 50,
                repeat: Infinity,
                repeatDelay: 2,
              }}
            >
              <img src={logo} alt="" />
            </motion.div>
          </figure>
          <motion.h1 variants={textVariant(0.1)}>UNFavor</motion.h1>
          <motion.h2 variants={textVariant(0.15)}>
            Ofrece favores y recibe otros a cambio
          </motion.h2>
        </div>
      </motion.div>
      <div className={styles["icons"]}>
        <BsFacebook />
        <BsTwitter />
        <BsInstagram />
      </div>
      <div className={styles["links"]}>
        <Link to={"/"}>Home</Link>
     
        <Link to={"/"}>Services</Link>
        <Link to={"/"}>About</Link>
        <Link to={"/"}>Contact</Link>
        <Link to={"/"}>Team</Link>
      </div>
    </div>
  );
};

export default Footer;
