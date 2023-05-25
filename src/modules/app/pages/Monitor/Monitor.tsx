// Core
import React, { useEffect } from "react";
// Router
import { Link } from "react-router-dom";
//Styles
import styles from './Monitor.module.css';
//Redux
import {useAppDispatch, useAppSelector} from "@store/hooks";
import { getMatches } from "@root/store/match/matchAsyncAction";
// Icons
import { BsChatDots } from "react-icons/bs";
// Components
import FavorCard from "./components/FavorCard";

const dommieInfo = [
    {
        title: 'Pintar Fachada Casa',
        description: 'Pintar casa en Engativa de 70 metros cuadrados en máximo 3 dias habiles.',
        state: 'En Proceso. A la espera de la confirmación de la realización',
        limitDate: '30/03/2023',
        responsable: 'Rosalia Monsalve',
    },
    {
        title: 'Limpieza Apartamento',
        description: 'Limpieza de un apartamento de 30 m^2. Para un plazo de 1 semana.',
        state: 'Finalizado. Esperando Validación',
        limitDate: '16/03/2023',
        responsable: 'Mario Bros',
    },
    {
        title: 'Pintar Fachada Casa',
        description: 'Pintar casa en Engativa de 70 metros cuadrados en máximo 3 dias habiles.',
        state: 'En Proceso. A la espera de la confirmación de la realización',
        limitDate: '30/03/2023',
        responsable: 'Rosalia Monsalve',
    },
    {
        title: 'Limpieza Apartamento',
        description: 'Limpieza de un apartamento de 30 m^2. Para un plazo de 1 semana.',
        state: 'Finalizado. Esperando Validación',
        limitDate: '16/03/2023',
        responsable: 'Mario Bros',
    },
    {
        title: 'Pintar Fachada Casa',
        description: 'Pintar casa en Engativa de 70 metros cuadrados en máximo 3 dias habiles.',
        state: 'En Proceso. A la espera de la confirmación de la realización',
        limitDate: '30/03/2023',
        responsable: 'Rosalia Monsalve',
    },
    {
        title: 'Limpieza Apartamento',
        description: 'Limpieza de un apartamento de 30 m^2. Para un plazo de 1 semana.',
        state: 'Finalizado. Esperando Validación',
        limitDate: '16/03/2023',
        responsable: 'Mario Bros',
    }
]
const Monitor: React.FC = () => {
    const dispatch = useAppDispatch();
    const {matches} = useAppSelector((state) => state.match);
    useEffect(() => {
        dispatch(getMatches("ANYTHING"));
        console.log(matches)
    }, []);
  return (
    <main className={styles['Monitor']}>
        <div className={styles['actions']}>
            <div className={styles['action-wrapper']}>
                <Link to="/chat" type={"button"}>Chat <BsChatDots/></Link>
            </div>
            <hr/>
        </div>
        <div className={styles['favorsWrapper']}>
            {dommieInfo.map((info, index) => <FavorCard key={index} {...info}/> )}
        </div>

    </main>
  )
}

export default Monitor
