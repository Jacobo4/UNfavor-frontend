import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "../../config/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;

export type controlFavorFormValues = {
    userId: string,
    action: string,
}
export interface ControlFavorSuccess {
    message: string;
}

export interface ControlFavorFailure {
    message: string | any;
    error: string;
}

export const controlFavor = createAsyncThunk(
    '/admin/controlFavor'
    , async (formValues: controlFavorFormValues, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const {data} = await axiosApiInstance.put(
                `${API_URL}/admin/controlFavor`,
                {...formValues},
                config
            );
            return {...formValues, ...data};
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const getAdminInfo = createAsyncThunk(
    '/admin/getAdminInfo',
    async (_, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosApiInstance.get(
                `${API_URL}/admin/statistics`,
                config
            );
        } catch (error) {
            console.log("dfdsfas")
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)
export const getAllUsers = createAsyncThunk(
    '/admin/getAllUsers',
    async (_, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosApiInstance.get(
                `${API_URL}/admin/users`,
                config
            );
            
            return data;
        } catch (error) {
            console.log("dfdsfas")
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)