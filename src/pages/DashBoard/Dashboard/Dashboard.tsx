import styles from "./Dashboard.module.css";
import React from "react";
import { BsFilePost,BsSearch } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import {FcCancel} from 'react-icons/fc';
import {AiFillCheckCircle} from 'react-icons/ai'
import PieChart from "./PieChart";
import LineChart from "./LineChart";

const Dashboard: React.FC = () => {
  return (
    <div className={styles.Dashboard}>
      <div className={styles.firstContent}>
        <div className={styles.singleDashboardCard}>
          <div className={styles.cardContent}>
            <h2>Total Favores Publicados</h2>
            <span>300</span>
          </div>
          <span className={styles.cardIcon}>
            <BsFilePost />
          </span>
        </div>
        <div className={styles.singleDashboardCard}>
          <div className={styles.cardContent}>
            <h2>Total de usuarios</h2>
            <span>300</span>
          </div>
          <span className={styles.cardIcon}>
            <FaUsers />
          </span>
        </div>
      </div>
      <div className={styles.secondContent}>
        <div className={styles.singleDashboardCard}>
          <div className={styles.cardContent}>
            <h2>Favores denegados</h2>
            <span>300</span>
          </div>
          <span className={styles.cardIcon}>
            <FcCancel />
          </span>
        </div>
        <div className={styles.singleDashboardCard}>
          <div className={styles.cardContent}>
            <h2>Favores en revisión</h2>
            <span>300</span>
          </div>
          <span className={styles.cardIcon}>
            <BsSearch />
          </span>
        </div>
        <div className={styles.singleDashboardCard}>
          <div className={styles.cardContent}>
            <h2>Favores publicados</h2>
            <span>300</span>
          </div>
          <span className={styles.cardIcon}>
            <AiFillCheckCircle />
          </span>
        </div>
      </div>

      <div className={styles.charts}>
      <PieChart/>
      <LineChart/>
      </div>
      
    </div>
  );
};

export default Dashboard;
