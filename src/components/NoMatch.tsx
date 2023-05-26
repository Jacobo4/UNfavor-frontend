import React from 'react'
import {MdHeartBroken} from 'react-icons/md'
import styles from './NoMatch.module.css'
import { Link } from 'react-router-dom'

export default function NoMatch() {
  return (
    <div className={styles["wrapper"]}>
      <MdHeartBroken/>
      <h1>Aún no tienes matches</h1>
        <p>¡Sigue buscando!</p>
        <Link
        to={"/match"}
        >¡Encuentra tu match!</Link>
    </div>
  )
}
