// Core
import React from "react";
// Form
import {useForm} from "react-hook-form";

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
        formState: {errors},
    } = useForm<publicProfile>();

    const onSubmit = handleSubmit((data) => {
        console.log(data);
    });

    return (
        <div>
            <form onSubmit={onSubmit}>

                <div>
                    <label for="fullName">Nombre completo: </label>
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
                    <label>Contraseña: </label>
                    <input
                        type="password"
                        {...register("password", {
                            required: true,
                        })}
                        placeholder="Contraseña"
                    />

                    {errors.password?.type === "required" && (
                        <span className={"error"}>El campo Contraseña es obigatorio</span>
                    )}
                </div>
                <div>
                    <label>Edad: </label>
                    <input
                        type="text"
                        {...register("age", {
                            required: true,
                        })}
                        placeholder="Edad"
                    />

                    {errors.age?.type === "required" && (
                        <span className={"error"}>El campo Edad es obigatorio</span>
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
                    <select {...register("category", {required: true})}>
                        <option value="">Select...</option>
                        <option value="Limpieza">Limpieza</option>
                        <option value="Académico">Académico</option>
                    </select>

                    {errors.category?.type === "required" && (
                        <span className={"error"}>El campo Categoria es obigatorio</span>
                    )}
                </div>
                <h2>Editar filtro</h2>
                <div className={styles.select}>
                    <label>Categoria: </label>
                    <select {...register("tipe", {required: true})}>
                        <option value="">Select...</option>
                        <option value="Limpieza">Limpieza</option>
                        <option value="Académico">Académico</option>
                    </select>

                    {errors.tipe?.type === "required" && (
                        <span className={"error"}>El campo Categoria es obigatorio</span>
                    )}
                </div>
                <div className={styles.slider}>
                    <label>Distancia: </label>
                    <DistanceSlider/>
                </div>
                <div>
                    <button type="submit">Guardar cambios</button>
                </div>

            </form>
        </div>
    );
}
