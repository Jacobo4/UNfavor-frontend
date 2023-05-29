import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "../../config/axiosApiInstance";

const API_URL = import.meta.env.VITE_API_URL;

export interface Match {
    user_id: string;
    name: string;
    age: number;
    favor_date_published: string;
    favor_title: string;
    favor_description: string;
    favor_category: string;
    favor_review_avg: number;
    favor_img_url: string;
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

export interface dislikeMatchValues {
    userId: String
}

export interface dislikeMatchSuccess {
    message: string;
    favor: Match
}

export interface dislikeMatchFailure {
    message: string;
    error: string;
}

export type getMatchesHistoryValues = {
    option: string;
}

export interface getMatchesHistorySuccess {
    message: string;
    matches: Array<Match>

}

export interface getMatchesHistoryFailure {
    message: string;
    error: string;
}

export interface matchActionsValues {
    matchId: string;
    option: string;
    comment?: string;
    rating?: number;
}

export interface matchActionSuccess {
    message: string;

}

export interface matchActioFailure {
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

            const {data} = await axiosApiInstance.post(
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
export const getMatchesHistory = createAsyncThunk(
    'match/getMatchesHistory',
    async (values: getMatchesHistoryValues, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };
            const {data} = await axiosApiInstance.post(
                `${API_URL}/user/matches`,
                {...values},
                config
            );
            return {option: values.option, ...data};
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message)
            } else {
                return rejectWithValue(error.message)
            }
        }
    }
)

export const matchAction = createAsyncThunk(
    'match/matchAction',
    async (values: matchActionsValues, {rejectWithValue}) => {

        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axiosApiInstance.put(
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
    async (values: likeMatchValues, {rejectWithValue, getState}) => {
        const state = getState();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axiosApiInstance.put(
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

export const dislikeMatch = createAsyncThunk(
    'match/dislikeMatch',
    async (values: dislikeMatchValues, {rejectWithValue, getState}) => {
        const state = getState();
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axiosApiInstance.put(
                `${API_URL}/favor/dislikeFavor`,
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