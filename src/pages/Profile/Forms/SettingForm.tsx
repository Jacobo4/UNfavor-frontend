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
          <label>Nombre completo: </label>
          <div>
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
          </div>
          <label>Contraseña: </label>
          <div>
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
          </div>
          <label>Edad: </label>
          <div>
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
          </div>
          <label>Teléfono: </label>
          <div>
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
          </div>
          <h2>Editar favor</h2>
          <label>Titulo del favor: </label>
          <div>
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
          </div>
          <label>Descripción: </label>
          <div>
            <textarea
              {...register("description", {
                required: true,
              })}
              placeholder="Descripción"
            />

            {errors.description?.type === "required" && (
              <p>El campo Descripción es obigatorio</p>
            )}
          </div>
          <label>Categoria: </label>
          <div className={styles.select}>
            <select {...register("category", { required: true })}>
              <option value="">Select...</option>
              <option value="Limpieza">Limpieza</option>
              <option value="Académico">Académico</option>
            </select>

            {errors.category?.type === "required" && (
              <p>El campo Categoria es obigatorio</p>
            )}
          </div>
          <h2>Editar filtro</h2>
          <label>Categoria: </label>
          <div className={styles.select}>
            <select {...register("tipe", { required: true })}>
              <option value="">Select...</option>
              <option value="Limpieza">Limpieza</option>
              <option value="Académico">Académico</option>
            </select>

            {errors.tipe?.type === "required" && (
              <p>El campo Categoria es obigatorio</p>
            )}
          </div>
          <label>Distancia: </label>
          <div className={styles.slider}>
            <DistanceSlider />
          </div>
          <div>
            <button type="submit">Guardar cambios</button>
          </div>
        </div>
      </form>
    </div>
  );
}
