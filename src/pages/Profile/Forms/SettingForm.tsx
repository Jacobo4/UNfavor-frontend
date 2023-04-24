// Core
import React, { ChangeEvent, useState } from "react";
// Form

import { axiosApiInstance } from "@store/axiosApiInstance";
import SelectCategory from "./SelectCategory";
import styles from "../SettingsProfile.module.css";
import DistanceSlider from "./DistanceSlider";
import { config } from "process";
import { useForm, Controller } from "react-hook-form";
import {useNavigate} from "react-router-dom";

type publicProfile = {
  //user
  fullName: string;
  email: string;
  phone: string;
  //favor
  tittle: string;
  description: string;
  category: string;
  location: string;
  //filter
  type: string;
  distance: number;
  price: number;
};
const API_URL = import.meta.env.VITE_API_URL;
export default function Form() {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    control
  } = useForm<publicProfile>();

  const onSubmit = handleSubmit(async (data) => {
    console.log(data);
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { userData } = await axiosApiInstance.post(
      `${API_URL}/user/updateProfile`,
      {
        newUserData: {
          name: data.fullName,
          email: data.email,
          phone: data.phone,
          favor: {
            title: data.tittle,
            description: data.description,
            category: data.category,
            location: data.location,
            preferences: {
              favor_filters: {
                favor_type: { type: data.type },
                max_distance_km: { type: data.distance },
              },
            },
          },
        },
      },
      config
    );
    navigate("/user");
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="fullName">Nombre completo: </label>
          <input
            type="text"
            id={"fullName"}
            {...register("fullName", {
              required: true,
            })}
            placeholder="Nombre completo"
            
          />

          {errors.fullName?.type === "required" && (
            <span className={"error"}>El campo Nombre es obigatorio</span>
          )}
        </div>

        <div>
          <label htmlFor="email">Email: </label>
          <input
            type="email"
            id={"email"}
            {...register("email", {
              required: true,
            })}
            placeholder="Email"
          />

          {errors.email?.type === "required" && (
            <span className={"error"}>El campo Email es obigatorio</span>
          )}
        </div>
        <div>
          <label>Teléfono: </label>
          <input
            placeholder="Telefono"
            type="text"
            {...register("phone", {
              required: true,
            })}
          />
          {errors.phone?.type === "required" && (
            <span className={"error"}>El campo Telefono es obigatorio</span>
          )}
        </div>
        <h2>Editar favor</h2>
        <div>
          <label>Titulo del favor: </label>
          <input
            type="text"
            
            {...register("tittle", {
              required: true,
            })}
            placeholder="Titulo del favor"
          />

          {errors.tittle?.type === "required" && (
            <span className={"error"}>El campo Titulo es obigatorio</span>
          )}
        </div>
        <div>
          <label>Descripción: </label>
          <textarea
            {...register("description", {
              required: true,
            })}
            
            placeholder="Descripción"
          />

          {errors.description?.type === "required" && (
            <span className={"error"}>El campo Descripción es obigatorio</span>
          )}
        </div>
        <div className={styles.select}>
          <label>Categoria: </label>
          <select {...register("category", { required: true })}>
            <option value="">Select...</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Académico">Académico</option>
          </select>

          {errors.category?.type === "required" && (
            <span className={"error"}>El campo Categoria es obigatorio</span>
          )}
        </div>
        <div>
          <label htmlFor="location">Ubicación: </label>
          <input
            type="text"
            
            id={"location"}
            {...register("location", {
              required: true,
            })}
            placeholder="Ubicación"
          />

          {errors.location?.type === "required" && (
            <span className={"error"}>El campo Ubicación es obigatorio</span>
          )}
        </div>

        <h2>Editar filtro</h2>
        <div className={styles.select}>
          <label>Categoria: </label>
          <select {...register("type", { required: true })}>
            <option value="">Select...</option>
            <option value="Limpieza">Limpieza</option>
            <option value="Académico">Académico</option>
          </select>

          {errors.type?.type === "required" && (
            <span className={"error"}>El campo Categoria es obigatorio</span>
          )}
        </div>
        <div className={styles.slider}>
          <label>Distancia: </label>
          <Controller
            name="distance"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DistanceSlider onChange={onChange} value={value} />
            )}
          />
          
        </div>
        
        <div>
          <button type="submit">Guardar cambios</button>
        </div>
      </form>
    </div>
  );
}
