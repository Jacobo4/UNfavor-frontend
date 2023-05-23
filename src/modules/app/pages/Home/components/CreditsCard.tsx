import React from "react";
import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./CreditsCard.module.css";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { Avatar } from "@mui/material";

type creatorProps = {
    name: string
    img: string
    description: string
    github: string
    linkedin: string
};

export default function CreditsCard(props: creatorProps) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <motion.div 
    transition={{layout:{ duration: 0.6, type: 'spring'}}}
    layout
    onClick={() => setIsOpen(!isOpen)} className={styles["card"]}>
      <img
        alt="avatar"
        src={props.img}
      />
      <motion.h2 layout="position">{props.name}</motion.h2>
      {isOpen && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <p>
          {props.description}
        </p>
        <div className={styles["box"]}>
          <a href={props.github} target="_blank">
            <BsGithub></BsGithub>
          </a>
          <a href={props.linkedin} target="_blank">
            <BsLinkedin></BsLinkedin>
          </a>
        </div>
      </motion.div>
      )}
    </motion.div>
  );
}
