import React from 'react'
import {MdHeartBroken} from 'react-icons/md'
import {TbReload} from 'react-icons/tb'
import styles from './NoItemsLeft.module.css'
import {Link} from 'react-router-dom'

interface NoMatchIProps {
    title: string;
    subtitle: string;
    icon: JSX.Element;
    customStyles?: string;
    goTo?: string;
    goToMessage?: string;
    reloadItems?: boolean;
    reloadItemsAction?: ()=>void;

}

const NoItemsLeft: React.FC<NoMatchIProps> = ({title, subtitle,icon, customStyles, goTo, goToMessage, reloadItems, reloadItemsAction}) => {
    const handleReload = () => {
        reloadItemsAction();
    }

    return (
        <div className={`${styles["wrapper"]} ${customStyles}`}>
            {icon}
            <h1>{title}</h1>
            <p>{subtitle}</p>

            {reloadItems
                ? <button onClick={handleReload}>Volver a cargar<TbReload/></button>
                : <Link to={goTo}>{goToMessage}</Link>
            }
        </div>
    )
}
export default NoItemsLeft;