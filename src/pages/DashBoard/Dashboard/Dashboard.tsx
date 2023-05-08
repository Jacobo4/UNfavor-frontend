import styles from "./Dashboard.module.css";
import React from "react";
import {BsFilePost} from 'react-icons/bs'
const Dashboard: React.FC = () => {
  
  return (
    <div className={styles.Dashboard}>
        <div className={styles.DashboardWrapper}>
          <div className={styles.DashboardCardsContent}>
            <div className={styles.singleDashboardCard}>
              <div className={styles.cardContent}>
                <h2>Total Favores Publicados</h2>
                <span>300</span>
              </div>
              <span>
                <BsFilePost/>
              </span>
            </div>
          </div>
        </div>
    </div>
  );
};

export default Dashboard;
