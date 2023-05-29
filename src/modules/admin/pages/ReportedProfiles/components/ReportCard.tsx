import styles from "./ReportCard.module.css";
import React from "react";
// Redux
import {useAppDispatch} from "@store/hooks";
import {useNavigate} from "react-router-dom";
import {AllUserInfo} from "@store/Admin/adminSlice";

interface reportCardIProps {
    description: string;
    reporter: AllUserInfo;
    reported: AllUserInfo;
}
const ReportCard: React.FC<reportCardIProps> = ({description, reporter, reported}) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleReport = () => {
        // dispatch(controlFavor(data));
    }

    return (

        <div className={styles['ReportCard']}>
            <div className={styles['favor']}>
                <img src={reported.favor.imgURL} className={styles.span2}/>
                <h3>Favor</h3>
                <span>{reported.favor.title}</span>
                <h5>Descripción:</h5>
                <span className={styles.span2}>{reported.favor.description}</span>
                <h5>Ubicacion:</h5>
                <span>{reported.favor.location}</span>
            </div>
            <hr/>
            <div className={styles['reporter']}>
                <h3>User reporter</h3>
                <h5>Nombre:</h5>
                <span>{reporter.name}</span>
                <h5>Email:</h5>
                <span>{reporter.email}</span>
                <h5>Edad:</h5>
                <span>{reporter.age}</span>
            </div>
            <div className={styles['reported']}>
                <h3>User reported</h3>
                <h5>Nombre:</h5>
                <span>{reported.name}</span>
                <h5>Email:</h5>
                <span>{reported.email}</span>
                <h5>Edad:</h5>
                <span>{reported.age}</span>
            </div>
            <hr/>
            <div className={styles['description']}>
                <h3>Razón</h3>
                <p>{description}</p>
            </div>
            <div className={styles['buttons']}>
                <button onClick={handleReport} className={styles.rejectButton}>Denegar</button>
                <button onClick={handleReport} className={styles.acceptButton}>Permitir</button>
            </div>
        </div>
    );
};

export default ReportCard;
