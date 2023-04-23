import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "@store/axiosApiInstance";
import {setAuthTokens} from 'axios-jwt'

const API_URL = import.meta.env.VITE_API_URL;

export type LoginCredentials = {
    email: string;
    password: string;
}

export interface LoginSuccess {
    message: string;
    access: string;
    refresh: string;
}

export interface LoginFailure {
    message: string | any;
    error: string;
}

export const login = createAsyncThunk(
    'auth/login',
    async ({email, password}: LoginCredentials, {rejectWithValue}) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axiosApiInstance.post(
                `${API_URL}/user/login`,
                {email, password},
                config
            );

            // store user's token in local storage
            setAuthTokens({
                accessToken: data.access,
                refreshToken: data.refresh
            });

            return data;
        } catch (error) {
            // return custom error message from API if any
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
)

// export const registerUser = createAsyncThunk(
//   'user/register',
//   async ({ firstName, email, password }, { rejectWithValue }) => {
//     try {
//       const config = {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       }
//
//       await axios.post(
//         `${backendURL}/api/user/register`,
//         { firstName, email, password },
//         config
//       )
//     } catch (error) {
//       if (error.response && error.response.data.message) {
//         return rejectWithValue(error.response.data.message)
//       } else {
//         return rejectWithValue(error.message)
//       }
//     }
//   }
// )