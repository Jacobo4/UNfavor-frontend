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
// Images
import avatar from "@assets/images/avatar.png";
import logo from "@assets/images/logo.png";

const Header: React.FC = () => {

    const [isOpen, toggleMenu] = useState<boolean>(false);
    const handleMenuClick = () => {
        toggleMenu(!isOpen);
    }


    return (
        <div className={styles['Header']}>
            <button onClick={handleMenuClick} type={"button"}><FiMenu/></button>

            <figure className={styles['logo']}>
                <img src={logo} alt="" />
                <h1>UNfavor</h1>
            </figure>

            <figure className={styles['avatar']}>
                <img src={avatar} alt="" />
            </figure>

            <nav className={`${styles['menu']} ${!isOpen ? styles['menu--close'] : ''}`}>
                <ul>
                    <li>
                        <Link to="/">Buscar favores <BsSearch/></Link>
                    </li>
                    <span className={styles['line']}></span>

                    <li>
                        <Link to="/">Crear favor <AiOutlinePlusCircle/></Link>
                    </li>
                    <span className={styles['line']}></span>
                    <li>
                        <Link to="/monitor">Mis favores <TiMessages/></Link>
                    </li>
                    <span className={styles['line']}></span>
                </ul>
            </nav>


        </div>
    )
}

export default Header
