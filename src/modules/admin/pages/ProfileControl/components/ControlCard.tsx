import styles from "./ControlCard.module.css";
import React from "react";
// Redux
import {controlFavor} from "@store/Admin/adminAsyncActions";
import {useAppDispatch} from "@store/hooks";
import {useNavigate} from "react-router-dom";
import {AllUserInfo} from "@store/Admin/adminSlice";

type favorAction = {
    userId: string;
    action: string;
}
const ControlCard: React.FC = ({user}: { user: AllUserInfo }) => {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();

    const handleAccept = () => {
        const data: favorAction = {
            userId: user._id,
            action: "PUBLISHED",
        }
        dispatch(controlFavor(data));
    }
    const handleReject = () => {
        const data: favorAction = {
            userId: user._id,
            action: "DENIED"
        }
        dispatch(controlFavor(data));
        console.log("DENIED");
    }

    return (

        <div className={styles['ControlCard']}>

            <div className={styles['favor']}>
                <img src={user.favor.imgURL} className={styles.span2}/>
                <h3>Favor</h3>
                <span>{user.favor.title}</span>
                <h5>Descripción:</h5>
                <span className={styles.span2}>{user.favor.description}</span>
                <h5>Ubicacion:</h5>
                <span>{user.favor.location}</span>
            </div>
            <hr/>
            <h3>User</h3>
            <div className={styles['user']}>
                <h5>Nombre:</h5>
                <span>{user.name}</span>
                <h5>Email:</h5>
                <span>{user.email}</span>
                <h5>Edad:</h5>
                <span>{user.age}</span>
            </div>
            <div className={styles['buttons']}>
                <button onClick={handleReject} className={styles.rejectButton}>Denegar</button>
            <button onClick={handleAccept} className={styles.acceptButton}>Permitir</button>
            </div>
        </div>
    );
};

export default ControlCard;
