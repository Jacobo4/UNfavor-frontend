import styles from "./Dashboard.module.css";
import React, { useEffect } from "react";
import { BsFilePost, BsSearch } from "react-icons/bs";
import { FaUsers } from "react-icons/fa";
import { FcCancel } from "react-icons/fc";
import { AiFillCheckCircle } from "react-icons/ai";
import PieChart from "./PieChart";
import LineChart from "./LineChart";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getAdminInfo } from "@store/Admin/adminAsyncActions";

const Dashboard: React.FC = () => {
  const dispatch = useAppDispatch();
  const { adminInfo } = useAppSelector((state) => state.admin);
  console.log(adminInfo);
  console.log("adminInfo");
  useEffect(() => {
    if (!adminInfo) {
      dispatch(getAdminInfo());
    }
  }, []);
  return (
    <div className={styles.Dashboard}>
      {adminInfo && (
        <>
          <div className={styles.firstContent}>
            <div className={styles.singleDashboardCard}>
              <div className={styles.cardContent}>
                <h2>Total Favores Publicados</h2>
                <span>{adminInfo.totalFavors}</span>
              </div>
              <span className={styles.cardIcon}>
                <BsFilePost />
              </span>
            </div>
            <div className={styles.singleDashboardCard}>
              <div className={styles.cardContent}>
                <h2>Total de usuarios</h2>
                <span>{adminInfo.totalUsers}</span>
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
                <span>{adminInfo.totalDeniedFavors}</span>
              </div>
              <span className={styles.cardIcon}>
                <FcCancel />
              </span>
            </div>
            <div className={styles.singleDashboardCard}>
              <div className={styles.cardContent}>
                <h2>Favores en revisión</h2>
                <span>{adminInfo.totalReviewingFavors}</span>
              </div>
              <span className={styles.cardIcon}>
                <BsSearch />
              </span>
            </div>
            <div className={styles.singleDashboardCard}>
              <div className={styles.cardContent}>
                <h2>Favores publicados</h2>
                <span>{adminInfo.totalPublishedFavors}</span>
              </div>
              <span className={styles.cardIcon}>
                <AiFillCheckCircle />
              </span>
            </div>
          </div>
          <div className={styles.charts}>
            <PieChart arr={adminInfo.userScore} />
            <LineChart arr={adminInfo.favorsPerMonth} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
