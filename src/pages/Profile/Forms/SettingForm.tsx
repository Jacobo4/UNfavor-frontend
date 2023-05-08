// Core
import React, { ChangeEvent, useEffect, useState } from "react";
// Form

import { axiosApiInstance } from "@store/axiosApiInstance";
import SelectCategory from "./SelectCategory";
import styles from "../SettingsProfile.module.css";
import DistanceSlider from "./DistanceSlider";
import { config } from "process";
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { alpha, createTheme, styled } from "@mui/material/styles";
import { getProfileInfo } from "@store/user/userAsyncAction";
import TextField, { TextFieldProps } from "@mui/material/TextField";
import FormControl from "@mui/material/FormControl";
import { OutlinedInputProps } from "@mui/material/OutlinedInput";
import { Description } from "@headlessui/react/dist/components/description/description";
import { useAppSelector } from "@store/hooks";
import { InputLabel, MenuItem, Select } from "@mui/material";
import { AsyncThunkAction } from "@reduxjs/toolkit";
import { Dispatch, AnyAction } from "redux";

type publicProfile = {
  //user
  fullName: string;
  email: string;
  phone: string;
  //favor
  title: string;
  description: string;
  category: string;
  location: string;
  //filter
  type: string;
  distance: number;
  price: number;
};

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
export default function Form() {
  const navigate = useNavigate();
  const { userInfo } = useAppSelector((state) => state.user);
 
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<publicProfile>();
  useEffect(() => {
    if (!userInfo) {
      dispatch(getProfileInfo());
    }
  }, []);
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
            title: data.title,
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
    ).then(response => {
      console.log(response.data);
    })
    .catch(error => {
      console.log(error);
    });
    navigate("/user");
  });

  return (
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
            name="fullName"
            control={control}
          />
          <Controller
            render={({ field: { onChange, value } }) => (
              <CssTextField
                required
                fullWidth
                defaultValue={userInfo.phone}
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="tel"
                label="Telefono"
              />
            )}
            name="phone"
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
                defaultValue={userInfo.favor.title}
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="favorTitle"
                label="Titulo del favor"
              />
            )}
            name="title"
            control={control}
          />

          <Controller
            render={({ field: { onChange, value } }) => (
              <CssTextField
                required
                fullWidth
                defaultValue={userInfo.favor.description}
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="description"
                label="Descripción del favor"
                multiline
              />
            )}
            name="description"
            control={control}
          />

          <Controller
            render={({ field: { onChange, value } }) => (
              <CssTextField
                required
                fullWidth
                defaultValue={userInfo.favor.location}
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="location"
                label="Ubicación"
              />
            )}
            name="location"
            control={control}
          />

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
                  defaultChecked={(userInfo.favor.category)?userInfo.favor.category:"None"}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Académico"}>Académico</MenuItem>
                  <MenuItem value={"Cocina"}>Cocina</MenuItem>
                  <MenuItem value={"Carpinteria"}>Carpinteria</MenuItem>
                </Select>
              )}
              name="category"
              control={control}
            />
          </FormControl>
          <div />
        </div>
        <h2>Editar filtro</h2>
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
                  defaultChecked={(userInfo.preferences.favor_filters.type )?userInfo.favor.preferences.favor_filters.type:"None"}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={"Académico"}>Académico</MenuItem>
                  <MenuItem value={"Cocina"}>Cocina</MenuItem>
                  <MenuItem value={"Carpinteria"}>Carpinteria</MenuItem>
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
        </div>

        <div>
          <button type="submit">Guardar cambios</button>
        </div>
      </form>
    </div>
  );
}
function dispatch(
  arg0: AsyncThunkAction<
    any,
    void,
    {
      state?: unknown;
      dispatch?: Dispatch<AnyAction>;
      extra?: unknown;
      rejectValue?: unknown;
      serializedErrorType?: unknown;
      pendingMeta?: unknown;
      fulfilledMeta?: unknown;
      rejectedMeta?: unknown;
    }
  >
) {
  throw new Error("Function not implemented.");
}
