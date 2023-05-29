// Core
import React, { useEffect } from "react";
//Styles
import styles from "./HistoryTab.module.css";
// Images
import avatar from "@assets/images/avatar.png";
//Redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getMatchesHistory } from "@store/match/matchAsyncAction";
// Components
import NoItemsLeft from "@root/components/NoItemsLeft/NoItemsLeft";
import {MdHeartBroken} from "react-icons/md";
interface HistoryTabIProps {
    isActive: boolean
}
const HistoryTab: React.FC<HistoryTabIProps> = ({isActive}) => {
    const dispatch = useAppDispatch();
    const { myFinishedMatches } = useAppSelector((state) => state.match);
    useEffect(() => {
        dispatch(getMatchesHistory({option: "COMPLETED" }));
        console.log(myFinishedMatches);
      }, []);
    return (isActive && (
            <div className={styles["HistoryTab"]}>
                <h2>Historial</h2>
                {myFinishedMatches.length === 0 && (
                <NoItemsLeft
                    title={`Aún no tienes matches finalizados`}
                    subtitle={"¡Sigue buscando!"}
                    icon={<MdHeartBroken/>}
                    goTo={"/match"}
                    goToMessage={"¡Encuentra tu match!"}
                    reloadItems={false}

                />
                )}
                {myFinishedMatches.length != 0 &&(
                    <div className={styles["cardsContainer"]}>
                    {myFinishedMatches.map((h,index) => (
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
