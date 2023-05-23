// Core
import React from "react";
import {useState} from "react";
// Router
import {Outlet} from "react-router-dom";
//Styles
import styles from "./Auth.module.css";
//Link
import {Link} from 'react-router-dom';
// Assets
import logo from "@assets/images/logo.png";
// @ts-ignore
import {ReactComponent as TopDecor} from "@assets/images/login/loginTopDecor.svg";
// @ts-ignore
import {ReactComponent as BottomDecor} from "@assets/images/login/loginBottomDecor.svg";
// @ts-ignore
import {ReactComponent as SideBgDecor} from "@assets/images/login/bgDecor.svg";
// @ts-ignore
import {ReactComponent as SideDecor} from "@assets/images/login/loginDecor.svg";
// Components

const Auth: React.FC = () => {
    return (
        <div className={styles.loginContainer}>
            <div>
                <div className={styles.topVector}>
                    <TopDecor/>
                </div>
                <div>
                    <Link to="/" className={styles.logoContainer}>
                        <img src={logo} alt="Logo"/>
                        <h1>UNfavor</h1>
                    </Link>
                    <Outlet/>
                </div>
                <div className={styles.lowerVector}>
                    <BottomDecor/>
                </div>
            </div>
            <div className={styles['sideDecors']}>
                <SideDecor/>
                <SideBgDecor/>
            </div>
        </div>
    );
};

export default Auth;
