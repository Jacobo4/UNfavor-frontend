import styles from "./ReportCard.module.css";
import React from "react";
interface dataReport{
    reportedProfile: string,
    reporterProfile: string,
    title: string
    description: string,
}
const ReportCard: React.FC = ({reportedProfile,reporterProfile,title,description}:dataReport) => {
  return (
    <div className={styles.ReportCard}>
        Perfiles Reportados
    </div>
  );
};

export default ReportCard;
