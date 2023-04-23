// Core
import React from "react";
// Form
import { useForm } from "react-hook-form";

import SelectCategory from "./SelectCategory";
import styles from "../SettingsProfile.module.css";
import DistanceSlider from "./DistanceSlider";

type publicProfile = {
  //user
  fullName: string;
  password: string;
  age: number;
  phone: string;
  //favor
  tittle: string;
  description: string;
  category: string;
  value: string;
  //filter
  tipe: string;
  distance: number;
  price: number;
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
        <div>
          <h3>Nombre completo: </h3>
          <input
            type="text"
            {...register("fullName", {
              required: true,
            })}
            placeholder="Nombre completo"
            
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
<h2>Editar favor</h2>
<h3>Titulo del favor: </h3>
          <input
            type="text"
            {...register("tittle", {
              required: true,
            })}
            placeholder="Titulo del favor"
            
          />

          {errors.tittle?.type === "required" && (
            <p>El campo Titulo es obigatorio</p>
          )}
          <h3>Descripción: </h3>
          <textarea
            {...register("description", {
              required: true,
            })}
            placeholder="Descripción"
            
          />

          {errors.description?.type === "required" && (
            <p>El campo Descripción es obigatorio</p>
          )}
          <h3>Categoria: </h3>
          <div className={styles.select}>
            <SelectCategory />
          </div>
          <h2>Editar filtro</h2>
          <h3>Categoria: </h3>
          <div className={styles.select}>
            <SelectCategory />
          </div>
          {errors.tipe?.type === "required" && (
            <p>El campo Categoria es obigatorio</p>
          )}
          <h3>Distancia: </h3>
          <div className={styles.slider}>
            <DistanceSlider/>
          </div>
          <button type="submit">
            Guardar cambios
          </button>
        </div>
      </form>
    </div>
  );
}
