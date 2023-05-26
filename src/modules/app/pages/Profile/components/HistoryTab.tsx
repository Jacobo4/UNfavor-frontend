// Core
import React, { useEffect } from "react";
//Styles
import styles from "./HistoryTab.module.css";
// Images
import avatar from "@assets/images/avatar.png";
//Redux
import { useAppDispatch, useAppSelector } from "@store/hooks";
import { getMatchesHistory } from "@store/user/userAsyncAction";
// Mui
import Rating from "@mui/material/Rating";
import NoMatch from "@root/components/NoMatch";
import Match from "../../Match/Match";
// Dommie historical
const historial = [
    {
        state: "Finalizado",
        title: "Paseo de perro",
        img:
            "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "12/10/2021",
        to: "admi",
        rate: 2.5,
    },
    {
        state: "Finalizado",
        title: "Cocinar",
        img:
            "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "23/12/2022",
        to: "Lau",
        rate: 2.5,
    },
    {
        state: "Finalizado",
        title: "Paseo de perro",
        img:
            "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "12/10/2021",
        to: "admi",
        rate: 2.5,
    },
    {
        state: "Finalizado",
        title: "Cocinar",
        img:
            "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "23/12/2022",
        to: "Lau",
        rate: 2.5,
    },
    {
        state: "Finalizado",
        title: "Paseo de perro",
        img:
            "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "12/10/2021",
        to: "admi",
        rate: 2.5,
    },
    {
        state: "Finalizado",
        title: "Cocinar",
        img:
            "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "23/12/2022",
        to: "Lau",
        rate: 2.5,
    },
    {
        state: "Finalizado",
        title: "Paseo de perro",
        img:
            "https://images.pexels.com/photos/7210754/pexels-photo-7210754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "12/10/2021",
        to: "admi",
        rate: 2.5,
    },
    {
        state: "Finalizado",
        title: "Cocinar",
        img:
            "https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        date: "23/12/2022",
        to: "Lau",
        rate: 2.5,
    },
];
interface HistoryTabIProps {
    isActive: boolean
}
const HistoryTab: React.FC<HistoryTabIProps> = ({isActive}) => {
    const dispatch = useAppDispatch();
    const { matches } = useAppSelector((state) => state.user);
    useEffect(() => {
        dispatch(getMatchesHistory({option: "FINISHED" }));
        console.log(matches);
      }, []);
    return (isActive && (
            <div className={styles["HistoryTab"]}>
                <h2>Historial</h2>
                {matches.length === 0 && (
                <NoMatch historial={true} />
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
