// Core
import React, { useEffect } from "react";
//Styles
import styles from "./HistoryTab.module.css";
// Images
import avatar from "@assets/images/avatar.png";
//Redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getMatchesHistory } from "@store/user/userAsyncAction";
// Components
import NoItemsLeft from "@root/components/NoItemsLeft/NoItemsLeft";
import {MdHeartBroken} from "react-icons/md";
interface HistoryTabIProps {
    isActive: boolean
}
const HistoryTab: React.FC<HistoryTabIProps> = ({isActive}) => {
    const dispatch = useAppDispatch();
    const { matches } = useAppSelector((state) => state.user);
    useEffect(() => {
        dispatch(getMatchesHistory({option: "COMPLETED" }));
        console.log(matches);
      }, []);
    return (isActive && (
            <div className={styles["HistoryTab"]}>
                <h2>Historial</h2>
                {matches.length === 0 && (
                <NoItemsLeft
                    title={`Aún no tienes matches finalizados`}
                    subtitle={"¡Sigue buscando!"}
                    icon={<MdHeartBroken/>}
                    goTo={"/match"}
                    goToMessage={"¡Encuentra tu match!"}
                    reloadItems={false}

                />
                )}
                {matches.length != 0 &&(
                    <div className={styles["cardsContainer"]}>
                    {matches.map((h,index) => (
                        <div key={index} className={styles["card"]}>
                            <h4>Finalizado</h4>
                            <h2>{h.favor.title}</h2>
                            <p>{h.favor.description}</p>
                            <h3>Ubicación:</h3>
                            <span>{h.favor.location}</span>
                            <h3>Favor realizado por:</h3>
                            
                            <span>{h.name}</span>
                            <h3>Correo:</h3>
                            
                            <span>{h.email}</span>
                            {/* <h3>Calificación:</h3>
                            <div>
                                <Rating value={h.rate} readOnly/>
                            </div> */}
                        </div>
                    ))}
                </div>
                )

                }
                
            </div>
        )
    );
};

export default HistoryTab;
