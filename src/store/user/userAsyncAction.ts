import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "@store/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;

export type  updateUserInfoFormValues = {
    newUserData:{
        name: string,
        phone: string,
        age: number,
        favor: {
            title: string,
            description: string,
            location: string
        }
    }
}    

export interface UpdateUserInfoSuccess {
    message: string;
}
export interface UpdateUserInfoFailure {
    message: string | any;
    error: string;
}
/**
 * This function update the user info by sending a POST request to the endpoint
 
 * @param formValues The form values of the user.
 * @param rejectWithValue The callback function to reject the promise with a
 * custom error message.
 *
 * @returns A promise that resolves with the response data, or rejects with an
 * error message.
 */

export const updateUserInfo = createAsyncThunk(
    'user/updateUserInfo',
    async (formValues: updateUserInfoFormValues, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosApiInstance.put(
                `${API_URL}/user/updateProfile`,
                {...formValues},
                config
            );

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

export const getProfileInfo = createAsyncThunk(
    'user/getProfileInfo',
    async (_, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosApiInstance.get(
                `${API_URL}/user/info`,
                config
            );

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