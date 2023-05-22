// Core
import React from "react";
// Router
import {Link} from "react-router-dom";
//Styles
import styles from "./UserTab.module.css";
// Types
import {UserProfile} from "@store/user/userAsyncAction";
interface UserTabIProps {
    isActive: boolean;
    user: UserProfile;
}
const UserTab: React.FC<UserTabIProps> = ({isActive, user}) => {

    return (isActive && (
            <div className={styles["UserTab"]}>
                <h2>Sobre el usuario</h2>
                <div className={styles["aboutUser"]}>
                    <h3>E-mail: </h3>
                    <span>{user.email}</span>
                    <h3>Telefono: </h3>
                    <span>{user.phone}</span>
                    <h3>Filtros</h3>
                    <div>
                        <h3>Tipo de favor: </h3>
                        <span>{user.preferences.favor_filters.favor_type}</span>
                        <h3>Distancia máxima: </h3>
                        <span> Radio de{" "} {user.preferences.favor_filters.max_distance_km} km </span>
                    </div>
                    <h3>Favor </h3>
                    <div>
                        <h3>{user.favor.title}</h3>
                        <p>{user.favor.description}</p>
                        <div>
                            <h3>Ubicación: </h3>
                            <span>{user.favor.location} </span>
                        </div>
                    </div>
                </div>

                <button className={styles["settings"]}>
                    <Link to={"/user/settings"}>Editar perfil</Link>
                </button>
            </div>
        )
    );
};

export default UserTab;
