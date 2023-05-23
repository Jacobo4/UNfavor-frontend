// Core
import React from "react";
//Styles
import styles from "./HistoryTab.module.css";
// Images
import avatar from "@assets/images/avatar.png";
// Mui
import Rating from "@mui/material/Rating";
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

    return (isActive && (
            <div className={styles["HistoryTab"]}>
                <h2>Historial</h2>
                <div className={styles["cardsContainer"]}>
                    {historial.map((h,index) => (
                        <div key={index} className={styles["card"]}>
                            <h4>{h.state}</h4>
                            <h2>{h.title}</h2>
                            <figure className={styles["imgFav"]}>
                                <img src={h.img} alt=""/>
                            </figure>
                            <h3>Fecha realización:</h3>
                            <span>{h.date}</span>
                            <h3>Favor realizado para:</h3>
                            <figure className={styles["avatarHist"]}>
                                <img src={avatar} alt=""/>
                            </figure>
                            <span>{h.to}</span>
                            <h3>Calificación:</h3>
                            <div>
                                <Rating value={h.rate} readOnly/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        )
    );
};

export default HistoryTab;
