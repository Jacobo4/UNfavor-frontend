import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "@store/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;
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
            console.log(data.message);
            console.log(data);
            console.log(data.data.totalFavors);
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
            
            console.log(data);
            
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