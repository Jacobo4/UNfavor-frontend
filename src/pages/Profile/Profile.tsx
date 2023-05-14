//Styles
import styles from "./Profile.module.css";
import React, {useEffect} from "react";
import Raiting from "./Raiting";
import avatar from "@assets/images/avatar.png";
import favor from "@assets/images/favor.png";
import {getProfileInfo} from "@store/user/userAsyncAction";
import {useAppDispatch, useAppSelector} from "@store/hooks";
import {Link} from "react-router-dom";

const Profile: React.FC = () => {
    const dispatch = useAppDispatch();
    const {userInfo} = useAppSelector((state) => state.user);

    useEffect(() => {
        console.log(userInfo);
        if (!userInfo){
            dispatch(getProfileInfo());
            console.log(userInfo);
            
        }
    }, []);

    return (userInfo && (
        <div className={styles["Profile"]}>
            <div className={styles["profileData"]}>
                <div className={styles["userInfo"]}>
                    <figure className={styles["avatar"]}>
                        <img src={avatar} alt=""/>
                    </figure>
                    <h2>{userInfo.name}</h2>
                    <span>{userInfo.email}</span>
                </div>
                <div className={styles["divRaitings"]}>
                    <h3>Favores Realizados</h3>
                    <span>13</span>
                    <h3>Calificación Promedio</h3>
                    <Raiting/>
                </div>
            </div>
            <div className={styles["favFilters"]}>
                <h2>Mis filtros de busqueda</h2>
                <div className={styles["filters"]}>
                    <h3>Tipo de favor: </h3>
                    <span>{userInfo.preferences.favor_filters.favor_type}</span>
                    <h3>Distancia máxima: </h3>
                    <span>Radio de {userInfo.preferences.favor_filters.max_distance_km}km</span>
                </div>
            </div>
            <div className={styles["myFavor"]}>
                <h2>Mi Favor</h2>
                <h3>{userInfo.favor.title}</h3>
                <p>{userInfo.favor.description}</p>
                <div>
                    <h3>Ubicación: </h3>
                    <span>{userInfo.favor.location} </span>
                </div>
            </div>
            <button className={styles["settings"]}>
                <Link to={"/user/settings"} >Editar perfil</Link>
            </button>
            <div className={styles["historial"]}>
                <h2>Historial</h2>

                <div className={styles["cardsContainer"]}>
                    <div className={styles["card"]}>
                        <h4>Finalizada</h4>
                        <h2>Pintar Fachada de Casa</h2>
                        <figure className={styles["imgFav"]}>
                            <img src={favor} alt=""/>
                        </figure>
                        <h3>Fecha realización:</h3>
                        <span>14/03/2023</span>
                        <h3>Favor realizado para:</h3>
                        <figure className={styles["avatarHist"]}>
                            <img src={avatar} alt=""/>
                        </figure>
                        <h3>Calificación:</h3>
                        <Raiting/>
                    </div>
                    <div className={styles["card"]}>
                        <h4>Finalizada</h4>
                        <h2>Pintar Fachada de Casa</h2>
                        <figure className={styles["imgFav"]}>
                            <img src={favor} alt=""/>
                        </figure>
                        <h3>Fecha realización:</h3>
                        <span>14/03/2023</span>
                        <h3>Favor realizado para:</h3>
                        <figure className={styles["avatarHist"]}>
                            <img src={avatar} alt=""/>
                        </figure>
                        <h3>Calificación:</h3>
                        <Raiting/>
                    </div>
                    <div className={styles["card"]}>
                        <h4>Finalizada</h4>
                        <h2>Pintar Fachada de Casa</h2>
                        <figure className={styles["imgFav"]}>
                            <img src={favor} alt=""/>
                        </figure>
                        <h3>Fecha realización:</h3>
                        <span>14/03/2023</span>
                        <h3>Favor realizado para:</h3>
                        <figure className={styles["avatarHist"]}>
                            <img src={avatar} alt=""/>
                        </figure>
                        <h3>Calificación:</h3>
                        <Raiting/>
                    </div>
                    <div className={styles["card"]}>
                        <h4>Finalizada</h4>
                        <h2>Pintar Fachada de Casa</h2>
                        <figure className={styles["imgFav"]}>
                            <img src={favor} alt=""/>
                        </figure>
                        <h3>Fecha realización:</h3>
                        <span>14/03/2023</span>
                        <h3>Favor realizado para:</h3>
                        <figure className={styles["avatarHist"]}>
                            <img src={avatar} alt=""/>
                        </figure>
                        <h3>Calificación:</h3>
                        <Raiting/>
                    </div>
                    <div className={styles["card"]}>
                        <h4>Finalizada</h4>
                        <h2>Pintar Fachada de Casa</h2>
                        <figure className={styles["imgFav"]}>
                            <img src={favor} alt=""/>
                        </figure>
                        <h3>Fecha realización:</h3>
                        <span>14/03/2023</span>
                        <h3>Favor realizado para:</h3>
                        <figure className={styles["avatarHist"]}>
                            <img src={avatar} alt=""/>
                        </figure>
                        <h3>Calificación:</h3>
                        <Raiting/>
                    </div>
                </div>
            </div>
        </div>)
    )
        ;
};

export default Profile;
