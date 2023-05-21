import React from "react";
//form
import { useForm, Controller } from "react-hook-form";
// Router
import { useNavigate } from "react-router-dom";
// Styles
import styles from "./SettingsForm.module.css";
// Mui
import { InputLabel, MenuItem, Select } from "@mui/material";
import { ThemeProvider, createTheme, styled } from "@mui/material/styles";
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
const theme = createTheme({
  palette: {
    primary: {
      light: "#807cf6",
      main: "#615CF4",
      dark: "#4340aa",
      contrastText: "#fff",
    },
    secondary: {
      light: "#33dcb7",
      main: "#00D4A6",
      dark: "#009474",
      contrastText: "#000",
    },
    error: {
      light: "#ff7b83",
      main: "#FF5B64",
      dark: "#b23f46",
    },
  },
});

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
          <ThemeProvider theme={theme}>
            <FormControl
              variant="standard"
              sx={{ m: 1, minWidth: 220, color: "#00D4A6" }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                Categoria
              </InputLabel>

              <Controller
                render={({ field: { onChange, value } }) => (
                  <Select
                    labelId="demo-simple-select-standard-label"
                    id="demo-simple-select-standard"
                    required
                    value={value}
                    color="secondary"
                    label-color="secondary"
                    label="Categoria"
                    onChange={onChange}
                    defaultChecked={categorie !== "Any" ? categorie : "None"}
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {categories.map((category) => (
                      <MenuItem value={category}>{category}</MenuItem>
                    ))}
                  </Select>
                )}
                name={"favor_type"}
                control={control}
              />
            </FormControl>
          </ThemeProvider>
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
