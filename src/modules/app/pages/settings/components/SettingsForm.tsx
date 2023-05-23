// Core
import React, { ChangeEvent, useEffect, useState } from "react";
// Redux
import { getProfileInfo, updateMyUserInfo, updateUserInfoFormValues } from "@store/user/userAsyncAction";
import { useAppDispatch } from "@store/hooks";
// Form
import { axiosApiInstance } from "@config/axiosApiInstance";
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
// Components
import DistanceSlider from "./DistanceSlider";
import FavorForm from "./FavorForm";


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


const Form: React.FC = ({ userInfo }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const {
    
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<publicProfile>();

  const onSubmit = handleSubmit(async (data:updateUserInfoFormValues) => {
    try {
      await dispatch(updateMyUserInfo(data));
      navigate("/");
    } catch (e) {
      console.error(e);
    }
})

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


        <div>
          <button type="submit">Guardar cambios</button>
        </div>
      </form>
      <FavorForm categorie={userInfo.preferences.favor_filters.favor_type} distance={userInfo.preferences.favor_filters.max_distance_km}/>
    </div>
    )
  );
};
export default Form;
