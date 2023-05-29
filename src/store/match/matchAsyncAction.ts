import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "../../config/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;
export interface Match {
    id: string;
    email: string;
    reviews: {
        review_sum: number;
        review_num: number;
        comments: Array<string>;
    },
    imgURL: string;
    date_published: string;
    favor_state: string;
    title: string;
    description: string;
    location: string;
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
export interface matchActionsValues{
    matchId: string;
    option: string;
    comment?: string;
    rating?: number;
}
export interface matchActionSuccess {
    message: string;
    
}
export interface matchActioFailure{
    message: string | any;
    error: string;
}
export const getMatches = createAsyncThunk(
    'match/getMatches',
    async (values, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosApiInstance.post(
                `${API_URL}/favor/recommendFavors`,
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
export const matchAction = createAsyncThunk(
    'match/matchAction',
    async (values:matchActionsValues, {rejectWithValue}) => {
        
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const { data } = await axiosApiInstance.put(
                `${API_URL}/match/action`,
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
)
export const likeMatch = createAsyncThunk(
    'match/likeMatch',
    async (values:likeMatchValues, {rejectWithValue, getState}) => {
        const state = getState();
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