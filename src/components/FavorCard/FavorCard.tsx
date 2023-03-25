//Styles
import styles from './FavorCard.module.css'
import React from "react";

interface IProps {
    title: string,
    description: string,
    state: string,
    limitDate: string,
    responsable: string,
}
const FavorCard: React.FC = ({title, description, state, limitDate, responsable}: IProps) => {

  return (
    <div className={styles['FavorCard']}>
        <div className={styles['info']}>
            <h2>{title}</h2>
            <p>{description}</p>
            <span>Estado:</span>
            <p>{state}</p>
            <span>Fecha limite:</span>
            <p>{limitDate}</p>
            <span>Responsable: </span>
            <p>{responsable}</p>
        </div>
        <hr/>
        <div className={styles['actions']}>
            <button className={styles['confirm']} type={"button"}> Confirmar realización</button>
            <button className={styles['cancel']} type={"button"}> Cancelar realización</button>
        </div>
    </div>
  )
}

export default FavorCard
