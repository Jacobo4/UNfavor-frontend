// Core
import React, { useEffect } from "react";
// Sytles
import styles from "./Dashboard.module.css";
// Redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getStatistics } from "@store/Admin/adminAsyncActions";
import {AdminState} from "@store/Admin/adminSlice";
// Icons
import { BsFilePost, BsSearch } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { AiFillCheckCircle } from "react-icons/ai";
// Components
import PieChart from "./components/PieChart";
import LineChart from "./components/LineChart";

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { statistics }: AdminState = useAppSelector((state) => state.admin);
  useEffect(() => {
    if (!statistics) {
      dispatch(getStatistics());
    }
  }, []);
  return (
    <div className={styles.Dashboard}>
      {statistics && (
        <>
          <div className={styles.firstContent}>
            <div className={styles.singleDashboardCard}>
              <div className={styles.cardContent}>
                <h2>Total Favores Publicados</h2>
                <span>{statistics.totalFavors}</span>
              </div>
              <span className={styles.cardIcon}>
                <BsFilePost />
              </span>
            </div>
            <div className={styles.singleDashboardCard}>
              <div className={styles.cardContent}>
                <h2>Total de usuarios</h2>
                <span>{statistics.totalUsers}</span>
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
                <span>{statistics.totalDeniedFavors}</span>
              </div>
              <span className={styles.cardIcon}>
                <FcCancel />
              </span>
            </div>
            <div className={styles.singleDashboardCard}>
              <div className={styles.cardContent}>
                <h2>Favores en revisión</h2>
                <span>{statistics.totalReviewingFavors}</span>
              </div>
              <span className={styles.cardIcon}>
                <BsSearch />
              </span>
            </div>
            <div className={styles.singleDashboardCard}>
              <div className={styles.cardContent}>
                <h2>Favores publicados</h2>
                <span>{statistics.totalPublishedFavors}</span>
              </div>
              <span className={styles.cardIcon}>
                <AiFillCheckCircle />
              </span>
            </div>
          </div>
          <div className={styles.charts}>
            <PieChart arr={statistics.userScore} />
            <LineChart arr={statistics.favorsPerMonth} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
