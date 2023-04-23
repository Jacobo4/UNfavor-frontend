// Core
import React from "react";
//Styles
import styles from "./Register.module.css";
// Components
import Form from "./Form";

const Register: React.FC = () => {
    return (
        <div className={styles.Register}>
            <h2>Registrate</h2>
            <Form/>
        </div>
    );
};

export default Register;
