// Core
import React, { ChangeEvent, useEffect, useState } from "react";
// Form
import { axiosApiInstance } from "@store/axiosApiInstance";
import { useForm, Controller } from "react-hook-form";
// Router
import { useNavigate } from "react-router-dom";
// Styles
import styles from "./SettingsForm.module.css";
// Mui
import { InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
// Redux
import { getProfileInfo, updateUserInfo, updateUserInfoFormValues } from "@store/user/userAsyncAction";
// Components
import DistanceSlider from "./DistanceSlider";
import { useAppDispatch } from "@store/hooks";

type publicProfile = {
  newUserData: {
    name: string;
    phone: string;
    age: number;
    favor: {
      title: string;
      description: string;
      location: string;
    }
  }
  
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
const CssTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: "#00D4A6",
  },

  "& .MuiInput-underline:after": {
    borderBottomColor: "#00D4A6",
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: "#00D4A6",
    },
  },
});

const API_URL = import.meta.env.VITE_API_URL;
const Form: React.FC = ({ userInfo }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<publicProfile>();

  const onSubmit = handleSubmit((data:updateUserInfoFormValues) => {
    dispatch(updateUserInfo(data));
    navigate("/");
})
useEffect(() => {
  console.log(userInfo);
    dispatch(getProfileInfo());
    console.log(userInfo);
  
}, []);
  return (
    userInfo && (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <Controller
            render={({ field: { onChange, value } }) => (
              <CssTextField
                required
                fullWidth
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="name"
                label="Nombre completo"
                defaultValue={userInfo.name}
              />
            )}
            name={"newUserData.name"}
            control={control}
          />
          <Controller
            render={({ field: { onChange, value } }) => (
              <CssTextField
                required
                fullWidth
                type="number"
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="tel"
                label="Telefono"
                defaultValue={userInfo.phone}
              />
            )}
            name={"newUserData.phone"}
            control={control}
          />
        </div>
        <h2>Editar favor</h2>
        <div>
          <Controller
            render={({ field: { onChange, value } }) => (
              <CssTextField
                required
                fullWidth
                
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="favorTitle"
                label="Titulo del favor"
                defaultValue={userInfo.favor.title}
              />
            )}
            name={"newUserData.favor.title"}
            control={control}
          />

          <Controller
            render={({ field: { onChange, value } }) => (
              <CssTextField
                required
                fullWidth
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="description"
                label="Descripción del favor"
                multiline
                defaultValue={userInfo.favor.description}
              />
            )}
            name={"newUserData.favor.description"}
            control={control}
          />

          <Controller
            render={({ field: { onChange, value } }) => (
              <CssTextField
                required
                fullWidth
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="location"
                label="Ubicación"
                defaultValue={userInfo.favor.location}
              />
            )}
            name={"newUserData.favor.location"}
            control={control}
          />

          <FormControl
            variant="standard"
            sx={{ m: 1, minWidth: 220, color: "#00D4A6" }}
          >
            
           
          </FormControl>
          <div />
        </div>
        {/* <h2>Editar filtro</h2>
        <div className={styles.select}>
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
                  value={value}
                  label="Categoria"
                  onChange={onChange}
                  defaultChecked={
                    userInfo.preferences.favor_filters.type
                      ? userInfo.favor.preferences.favor_filters.type
                      : "None"
                  }
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  {categories.map((category) => (
                    <MenuItem value={category}>{category}</MenuItem>
                  ))}
                </Select>
              )}
              name="type"
              control={control}
            />
          </FormControl>
          {errors.type?.type === "required" && (
            <span className={"error"}>El campo Categoria es obigatorio</span>
          )}
        </div>
        <div className={styles.slider}>
          <h3>Distancia: </h3>
          <Controller
            name="distance"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DistanceSlider onChange={onChange} value={value} />
            )}
          />
        </div> */}

        <div>
          <button type="submit">Guardar cambios</button>
        </div>
      </form>
    </div>
    )
  );
};
export default Form;
