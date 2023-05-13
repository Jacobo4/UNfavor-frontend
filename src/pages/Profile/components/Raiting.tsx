import React from 'react'
// Styles
import styles from './Raiting.module.css'
// Icons
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
