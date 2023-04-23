// Core
import React from "react";
// Form
import { useForm } from "react-hook-form";
import SelectCategory from "./SelectCategory";
import styles from "../SettingsProfile.module.css";
// Icons

type favor = {
  tittle: string;
  description: string;
  category: string;
  value: string;
};

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<favor>();
  //const [data, setData] = useState("");

  const onSubmit = handleSubmit((data) => {
    console.log(data);
  });

  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
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
          {/* <select {...register("category", { required: true })}>
            
          </select> */}

          {/* {errors.category?.type === "required" && (
            <p>El campo Categoria es obigatorio</p>
          )} */}
         

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
