// Core
import React from "react";
//Styles
import styles from "./SignIn.module.css";
// Components
import Form from "./components/Form";

const SignIn: React.FC = () => {
    return (
        <div className={styles.SignIn}>
            <h2>Registrate</h2>
            <Form/>
        </div>
    );
};

export default SignIn;
