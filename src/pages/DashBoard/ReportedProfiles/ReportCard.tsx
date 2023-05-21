import styles from "./ReportCard.module.css";
import React from "react";
import {MdOutlineReportProblem} from 'react-icons/md'
interface dataReport{
    reportedProfile: string,
    reporterProfile: string,
    description: string,
    reporterPhotoProfile: string,
    reportedPhotoProfile: string,
}
const ReportCard: React.FC = ({reportedProfile,reportedPhotoProfile,reporterProfile,reporterPhotoProfile,description}:dataReport) => {
  return (
    <div className={styles.ReportCard}>
        
        <div className={styles.profiles}>
            <div className={styles.profile}>
                <h2>Usuario Reportado</h2>
                
                <img src={reportedPhotoProfile} alt="" />
                <h3>{reportedProfile}</h3>
            </div>
            <div className={styles.profile}>
                <h2>Usuario Reportante</h2>
                <img src={reporterPhotoProfile} alt="" />
                <h3>{reporterProfile}</h3>
            </div>
        </div>
        <div className={styles.description}>
            <h2>Descripción del Reporte:</h2>
        <p>{description}</p>
        </div>
        
        <div className={styles.Buttons}>
            <button className={styles.aceptButton} >Aceptar Reporte</button>
            <button className={styles.deniedButton}>Rechazar Reporte</button>
        </div>
        <div></div>
    </div>
  );
};

export default ReportCard;
