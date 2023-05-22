import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "../../config/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;
export const getAdminInfo = createAsyncThunk(
    '/user/getAdminInfo',
    async (_, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosApiInstance.get(
                `${API_URL}/user/statistics`,
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