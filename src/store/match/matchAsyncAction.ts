import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "../../config/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;
export interface Match {
    id: String
    reviews: {
        review_sum: number;
        review_num: number;
        comments: Array<String>;
    },
    date_published: String;
    favor_state: String;
    title: String;
    description: String;
    location: String;
    possible_matches: Array<any>;
}
export interface getMatchesSuccess {
    message: string;
    favors: Array<Match>
}
export interface getMatchesFailure {
    message: string;
    error: string;
}

export interface likeMatchValues {
    userId: String
}

export interface likeMatchSuccess {
    message: string;
    favor: Match
}
export interface likeMatchFailure {
    message: string;
    error: string;
}
export const getMatches = createAsyncThunk(
    'match/getMatches',
    async (_, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosApiInstance.get(
                `${API_URL}/favor/favors`,
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
);

export const likeMatch = createAsyncThunk(
    'match/likeMatch',
    async (values:likeMatchValues, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosApiInstance.put(
                `${API_URL}/favor/likeFavor`,
                {...values},
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
);