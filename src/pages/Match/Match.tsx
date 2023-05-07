//Core
import React, { useState } from "react";
//Styles
import styles from "./Match.module.css";
//Components
import MatchingCard from "@components/MatchingCard/MatchingCard";

const Match: React.FC = () => {
  return (
    <main className={styles.matchContainer}>
        <MatchingCard/>
    </main>
  );
};

export default Match;
