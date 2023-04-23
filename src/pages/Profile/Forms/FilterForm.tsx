// Core
import React from "react";
// Form
import { useForm } from "react-hook-form";
//Styles
import styles from "../SettingsProfile.module.css";
import SelectCategory from "./SelectCategory";
// Slider

import { Controller } from "react-hook-form";
import DistanceSlider from "./DistanceSlider";

type filter = {
  tipe: string;
  distance: number;
  price: number;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm<filter>();
  //const [data, setData] = useState("");
  
  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
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
function useState(arg0: string): [any, any] {
  throw new Error("Function not implemented.");
}
