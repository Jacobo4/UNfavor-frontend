import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "@store/axiosApiInstance";
import {setAuthTokens} from 'axios-jwt'

const API_URL = import.meta.env.VITE_API_URL;

export type LoginFormValues = {
    email: string;
    password: string;
}

export type SignInFormValues = {
    user: {
        name: string,
        email: string,
        password: string,
        phone: string,
        age: number,
    },
    favor: {
        title: string,
        description: string,
        location: string
    }
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

export interface SignInSuccess {
    message: string;
    access: string;
    refresh: string;
}

export interface SignInFailure {
    message: string | any;
    error: string;
}
/**
 * This function logs in a user by sending a POST request to the login endpoint
 * of the API with the user's form values. It then stores the user's tokens in
 * local storage and returns the response data.
 *
 * @param formValues The form values of the user.
 * @param rejectWithValue The callback function to reject the promise with a
 * custom error message.
 *
 * @returns A promise that resolves with the response data, or rejects with an
 * error message.
*/
export const login = createAsyncThunk(
    'auth/login',
    async (formValues: LoginFormValues, {rejectWithValue}) => {
        try {
            // configure header's Content-Type as JSON
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axiosApiInstance.post(
                `${API_URL}/user/login`,
                {...formValues},
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
/**
 * This function signs up a user by sending a POST request to the register endpoint
 * of the API with the user's form values. It then stores the user's tokens in
 * local storage and returns the response data.
 *
 * @param formValues The form values of the user.
 * @param rejectWithValue The callback function to reject the promise with a
 * custom error message.
 *
 * @returns A promise that resolves with the response data, or rejects with an
 * error message.
 */
export const signIn = createAsyncThunk(
    'auth/signin',
    async (formValues: SignInFormValues, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            }

            const {data} = await axiosApiInstance.post(
                `${API_URL}/user/register`,
                {...formValues},
                config
            );


            // store user's token in local storage
            setAuthTokens({
                accessToken: data.access,
                refreshToken: data.refresh
            });

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)