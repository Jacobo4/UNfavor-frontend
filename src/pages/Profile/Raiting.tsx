import React from 'react'
import styles from './Raiting.module.css'
import { BsStarFill,BsStarHalf } from 'react-icons/bs';


export default function Raiting() {
  return (
    <div className={styles['stars']}>
        <BsStarFill/>
        <BsStarFill/>
        <BsStarFill/>
        <BsStarFill/>
        <BsStarFill/>
    </div>
  )
}
