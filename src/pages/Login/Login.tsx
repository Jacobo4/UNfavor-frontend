// Core
import React from "react";
import {useState} from "react";
//Styles
import styles from "./Login.module.css";
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
import Form from "./Form";

const Login: React.FC = () => {
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
                    <div className={styles.formContainer}>
                        <h2>Iniciar sesión</h2>
                        <Form></Form>

                        <div className={styles.otherLoginContainer}>
                            <p>
                                No tienes una cuenta? <a href="">Regístrate aquí</a>
                            </p>
                            <div>
                                <hr/>
                                <h2>Iniciar sesión con</h2>
                                <hr/>
                            </div>
                        </div>
                        <div className={styles.buttonsContainer}>
                            <button className={styles.googleButton}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/471px-Google_%22G%22_Logo.svg.png"
                                    alt="Google logo"
                                />
                                <p>Continuar con Google</p>
                            </button>
                            <button className={styles.faceButton}>
                                <img
                                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Facebook_f_logo_%282019%29.svg/1365px-Facebook_f_logo_%282019%29.svg.png"
                                    alt="Google logo"
                                />
                                <p>Continuar con Facebook</p>
                            </button>
                        </div>
                    </div>
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

export default Login;
