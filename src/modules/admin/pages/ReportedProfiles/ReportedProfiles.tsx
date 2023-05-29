import ReportCard from "./components/ReportCard";
import styles from "./ReportedProfiles.module.css";
import React, {useEffect} from "react";
import {AllUserInfo, Report} from "@store/Admin/adminSlice";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {getReports} from "@store/Admin/adminAsyncActions";

const ReportedProfiles: React.FC = () => {
    const dispatch = useAppDispatch();
    const {reports}: { reports: Array<Report> } = useAppSelector((state) => state.admin);
    useEffect(() => {
        dispatch(getReports());
    }, []);

    return (
        <div className={styles.ReportedProfiles}>
            <div className={styles.headInfo}>
                <h1>
                    Control de Reportes
                </h1>
                <h2>
                    Aprueba o Rechaza Reportes por parte de usuarios.
                </h2>
            </div>
            <div className={styles.ReportCardsContainer}>
                {reports.map((info, index) =>
                    <ReportCard
                        description={info.description}
                        reporter={info.reporter}
                        reported={info.reported}/>
                )}
            </div>
        </div>
    );
};

export default ReportedProfiles;
