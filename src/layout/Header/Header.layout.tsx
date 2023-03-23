// Core
import React, {useState} from "react";
// Router
import {Link} from "react-router-dom";
// Styles
import styles from './Header.module.css';
// Icons
import {BsSearch} from 'react-icons/bs';
import {AiOutlinePlusCircle} from 'react-icons/ai';
import {TiMessages} from 'react-icons/ti';
import {FiMenu} from 'react-icons/fi';

const Header: React.FC = () => {

    const [isOpen, toggleMenu] = useState<boolean>(false);
    const handleMenuClick = () => {
        toggleMenu(!isOpen);
    }


    return (
        <div className={styles['Header']}>
            <button onClick={handleMenuClick} type={"button"}><FiMenu/></button>

            <nav className={`${styles['menu']} ${!isOpen ? styles['menu--close'] : ''}`}>
                <ul>
                    <li>
                        <Link to="/">Buscar favores <BsSearch/></Link>
                        <span className={"line"}></span>
                    </li>
                    <li>
                        <Link to="/">Crear favor <AiOutlinePlusCircle/></Link>
                        <span className={"line"}></span>
                    </li>
                    <li>
                        <Link to="/">Mis favores <TiMessages/></Link>
                        <span className={"line"}></span>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header
