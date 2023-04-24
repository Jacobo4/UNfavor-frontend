import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "@store/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;
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