// Core
import React from "react";
//Styles
import styles from "./Login.module.css";
// Components
import Form from "./components/Form";
import {Link} from "react-router-dom";
/**
 * Represents the login page.
 */
const Login: React.FC = () => {
    return (
        <div className={styles.Login}>
            <h2>Iniciar sesión</h2>
            <Form></Form>

            <div className={styles.otherLoginContainer}>
                <p>
                    No tienes una cuenta? <Link to={"/auth/signin"}>Regístrate aquí</Link>
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
    );
};

export default Login;
