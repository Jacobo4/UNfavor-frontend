// Core
import React, { useEffect } from "react";
// Redux
import {
  login,
  LoginFormValues,
  signIn,
  SignInFormValues,
} from "@store/auth/authAsyncActions";
// Router
import { useNavigate } from "react-router-dom";
// Form
import { Controller, useForm } from "react-hook-form";
//Styles
import styles from "./Form.module.css";
// Icons
import { MdLockOpen, MdPersonOutline } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@store/hooks";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
// Mui
import { InputLabel, MenuItem, Select } from "@mui/material";
import { styled } from "@mui/material/styles";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";

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

export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<SignInFormValues>({
    defaultValues: {
      user: {
        name: "Juan",
        email: "juan@gmail.com",
        password: "123",
        phone: "123",
        age: 19,
      },
      favor: {
        title: "My favor",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut consectetur delectus explicabo id iure maiores maxime quaerat quasi quos tempora. Ab adipisci debitis dolores est, exercitationem in iste quia sequi.",
        location: "Colombia",
      },
    },
  });
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { isLogged } = useAppSelector((state) => state.auth);

  const onSubmit = handleSubmit((data: SignInFormValues) => {
    dispatch(signIn(data));
  });

  // redirect authenticated user to user screen
  useEffect(() => {
    if (isLogged) navigate("/");
  }, [navigate, isLogged]);

  return (
    <form className={`form ${styles.Form}`} onSubmit={onSubmit}>
      <h3>Información del usuario</h3>
      <div>
        {/* <input placeholder="Nombre" type="text" {...register(`user[name]`, {
                    required: true,
                })}   />
                {errors.user?.name?.type === 'required' && <p>El campo nombre es obigatorio</p>} */}
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
            />
          )}
          name="user.name"
          control={control}
        />
      </div>
      <div>
        {/* <input
          placeholder="Correo electrónico"
          type="email"
          {...register(`user[email]`, {
            required: true,
          })}
        />
        {errors.user?.email?.type === "required" && (
          <p>El campo email es obigatorio</p>
        )} */}
        <Controller
          render={({ field: { onChange, value } }) => (
            <CssTextField
              required
              fullWidth
              type="email"
              error={value == ""}
              helperText={value == "" ? "El campo es obligatorio" : ""}
              value={value}
              onChange={onChange}
              id="email"
              label="Correo electrónico"
            />
          )}
          name="user.email"
          control={control}
        />
      </div>
      <div>
        {/* <input
          placeholder="Contraseña"
          type="password"
          {...register(`user[password]`, {
            required: true,
          })}
        />
        {errors.user?.password?.type === "required" && (
          <p>El campo password es obigatorio</p>
        )} */}
        <Controller
          render={({ field: { onChange, value } }) => (
            <CssTextField
              required
              fullWidth
              type="password"
              error={value == ""}
              helperText={value == "" ? "El campo es obligatorio" : ""}
              value={value}
              onChange={onChange}
              id="password"
              label="Contraseña"
            />
          )}
          name="user.password"
          control={control}
        />
      </div>
      <div className={styles["container"]}>
        <span>Telefono*</span>
        <Controller
          control={control}
          name={"user[phone]"}
          render={({ field: { onChange, value } }) => (
            <PhoneInput
              
              placeholder="Enter phone number"
              value={value}
              onChange={onChange}
              defaultCountry="US" // Optional: set the default country
            />
          )}
          rules={{ required: true }} // Optional: add validation rules
        />
        {errors.user?.phone?.type === "required" && (
          <p>El campo phone es obigatorio</p>
        )}
      </div>
      <h3>Favor: </h3>
      <div>
      <Controller
            render={({field: {onChange, value}}) => (
              <CssTextField
                required
                fullWidth
                
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="favorTitle"
                label="Titulo del favor"
              />
            )}
            name="favor.title"
            control={control}
          />
      </div>
      <div>
      <Controller
            render={({field: {onChange, value}}) => (
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
              />
            )}
            name="favor.description"
            control={control}
          />
      </div>
      <div>
      <Controller
            render={({field: {onChange, value}}) => (
              <CssTextField
                required
                fullWidth
               
                error={value == ""}
                helperText={value == "" ? "El campo es obligatorio" : ""}
                value={value}
                onChange={onChange}
                id="location"
                label="Ubicación"
              />
            )}
            name="favor.location"
            control={control}
          />
      </div>
      <div>
        <button type="submit">Registrarse</button>
      </div>
    </form>
  );
}
