//Styles
import styles from "./Login.module.css";
import React from "react";
import { useState } from "react";
import Form from "./Form";
import logo from "../../images/logo.png";
const Login: React.FC = () => {
  return (
    <div className={styles.loginContainer}>
      <div className={styles.topVector}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,250.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className={styles.sideVector}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,250.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div>
        <div className={styles.logoContainer}>
          <img src={logo} alt="Logo" />
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
              <hr />
              <h2>Iniciar sesión con</h2>
              <hr />
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
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 316">
          <path
            fill="#fff"
            fill-opacity="1"
            d="M0,256L80,234.7C160,213,320,171,480,176C640,181,800,235,960,250.7C1120,267,1280,245,1360,234.7L1440,224L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Login;
