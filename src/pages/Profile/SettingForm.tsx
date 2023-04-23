// Core
import React from "react";
// Form
import { useForm } from "react-hook-form";
//Styles
import styles from "./SettingForm.module.css";
// Icons

type publicProfile = {
  fullName: string;
  password: string;
  age: number;
  phone: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<publicProfile>();

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div className={styles.formContainer}>
          <h3>Nombre completo: </h3>
          <input
            type="text"
            {...register("fullName", {
              required: true,
            })}
            placeholder="Nombre completo"
            className={styles.emailInput}
          />

          {errors.fullName?.type === "required" && (
            <p>El campo Nombre es obigatorio</p>
          )}
          <h3>Contraseña: </h3>
          <input
            type="password"
            {...register("password", {
              required: true,
            })}
            placeholder="Contraseña"
            className={styles.emailInput}
          />

          {errors.password?.type === "required" && (
            <p>El campo Contraseña es obigatorio</p>
          )}
          <h3>Edad: </h3>
          <input
            type="text"
            {...register("age", {
              required: true,
            })}
            placeholder="Edad"
            className={styles.emailInput}
          />

          {errors.age?.type === "required" && (
            <p>El campo Edad es obigatorio</p>
          )}
          <h3>Teléfono: </h3>
          <input
            placeholder="Telefono"
            type="text"
            {...register("phone", {
              required: true,
            })}
          />
          {errors.phone?.type === "required" && (
            <p>El campo Telefono es obigatorio</p>
          )}

          <button className={styles.sendButton} type="submit">
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
}
