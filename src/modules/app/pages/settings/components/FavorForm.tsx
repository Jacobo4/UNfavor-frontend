import React from "react";
//form
import { useForm, Controller } from "react-hook-form";
// Router
import { useNavigate } from "react-router-dom";
// Styles
import styles from "./SettingsForm.module.css";
// Mui
import { InputLabel, MenuItem, Select } from "@mui/material";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
// Redux
import {
  updateFavorFilters,
  UpdateFavorFiltersFailure,
  UpdateFavorFiltersFormValues,
} from "@store/user/userAsyncAction";
import { useAppDispatch } from "@store/hooks";
// Components
import DistanceSlider from "./DistanceSlider";

type favFilters = {
  favor_type: string;
  max_distance_km: number;
};
const categories = [
  "Académico",
  "Carpinteria",
  "Cocina",
  "Cuidado de niños",
  "Cuidado de mascotas",
  "Deportes",
  "Electricidad",
  "Fotografia",
  "Jardineria",
  "Limpieza",
  "Transporte",
];
interface favorInfo {
  categorie: string;
  distance: number;
}


export default function FavorForm({ categorie, distance }) {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<favFilters>();

  const onSubmit = handleSubmit((data: UpdateFavorFiltersFormValues) => {
    dispatch(updateFavorFilters(data));
    //navigate("/");
  });
  return (
    <div>
      <form onSubmit={onSubmit}>
        <h2>Editar filtro</h2>
        <div className={styles.select}>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 220, color: "#00D4A6" }}
            >
              <InputLabel id="categoryLabel">
                Categoria
              </InputLabel>

              <Controller
                render={({ field: { onChange, value } }) => (
                  <Select
                    labelId="categoryLabel"
                    id="dcategoryId"
                    required
                    value={value}
                    color="secondary"
                    label-color="secondary"
                    defaultValue={categorie}
                    label="Categoria"
                    onChange={onChange}
                    defaultChecked={categorie !== "Any" ? categorie : "None"}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {categories.map((category) => (
                      <MenuItem 
                      key={category}
                      value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                )}
                name={"favor_type"}
                control={control}
              />
            </FormControl>
        </div>
        <div className={styles.slider}>
          <h3>Distancia: </h3>
          <Controller
            name={"max_distance_km"}
            control={control}
            render={({ field: { onChange, value } }) => (
              <DistanceSlider
                onChange={onChange}
                value={value}
                distance={distance}
              />
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
