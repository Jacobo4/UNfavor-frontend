//Styles
import styles from "./Match.module.css";
import React from "react";
import MatchingCard from "./MatchingCard";
import { useState } from "react";

const Match: React.FC = () => {
  return (
    <div className={styles.matchContainer}>
        <MatchingCard></MatchingCard>
    </div>
  );
};

export default Match;
