//Core
import React, { useState } from "react";
//Styles
import styles from "./Match.module.css";
//Components
import MatchingCard from "@components/MatchingCard/MatchingCard";

const Match: React.FC = () => {
  return (
    <div className={styles.matchContainer}>
        <MatchingCard/>
    </div>
  );
};

export default Match;
