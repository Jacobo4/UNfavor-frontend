// Core
import React from "react";
import {useState} from "react";
// Router
import {Outlet} from "react-router-dom";
//Styles
import styles from "./Auth.module.css";
// Assets
import logo from "@assets/images/logo.png";
import {ReactComponent as TopDecor} from "@assets/images/login/loginTopDecor.svg";
import {ReactComponent as BottomDecor} from "@assets/images/login/loginBottomDecor.svg";
import {ReactComponent as SideBgDecor} from "@assets/images/login/bgDecor.svg";
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
                    <div className={styles.logoContainer}>
                        <img src={logo} alt="Logo"/>
                        <h1>UNfavor</h1>
                    </div>
                    <section>
                        <Outlet/>
                    </section>
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
