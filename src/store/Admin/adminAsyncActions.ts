import {createAsyncThunk} from '@reduxjs/toolkit';
import {axiosApiInstance} from "../../config/axiosApiInstance";
import {AllUserInfo} from "@store/Admin/adminSlice";

const API_URL = import.meta.env.VITE_API_URL;

/**
 * Represents the statistics object.
 */
export interface Statistics {
    totalUsers: number;
    totalPublishedFavors: number;
    totalReviewingFavors: number;
    totalDeniedFavors: number;
    favorsPerMonth: Array<{
        _id: {
            year: number;
            month: number;
        };
        count: number;
    }>;
    userScore: Array<{
        _id: number;
        count: number;
    }>;
}

/**
 * Represents the success response for getting statistics.
 */
export interface GetStatisticsSuccess {
    message: string;
    data: Statistics;
}

/**
 * Represents the report object.
 */
export interface Report {
    _id: string;
    reporterId: string;
    reportedId: string;
    description: string;
    status: string;
    __v: number;
    reporter: AllUserInfo;
    reported: AllUserInfo;
}

/**
 * Represents the success response for getting reports.
 */
export interface GetReportsSuccess {
    message: string;
    reports: Array<Report>;
}

/**
 * Represents the success response for getting users to review.
 */
export interface GetUsersToReviewSuccess {
    message: string;
    users: Array<AllUserInfo>;
}

/**
 * Represents the values for controlling a favor.
 */
export type ControlFavorValues = {
    userId: string;
    action: string;
};

/**
 * Represents the success response for controlling a favor.
 */

export interface ControlFavorSuccess {
    message: string;
    data: ControlFavorValues & AllUserInfo
}

/**
 * Represents the failure response for controlling a favor.
 */

export interface ControlFavorFailure {
    message: string;
    error: string;
}

/**
 * Represents the failure response for getting statistics or reports.
 */
export interface GetStatisticsInfoFailure {
    message: string;
    error: string;
}

/**
 * Represents the failure response for getting reports.
 */
export interface GetReportsFailure {
    message: string;
    error: string;
}

/**
 * Represents the failure response for getting users to review.
 */
export interface GetUsersToReviewFailure {
    message: string;
    error: string;
}

/**
 * Async thunk for getting statistics.
 *
 * @returns The statistics data.
 */
export const getStatistics = createAsyncThunk(
    '/admin/getStatistics',
    async (_, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axiosApiInstance.get(
                `${API_URL}/admin/statistics`,
                config
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

/**
 * Async thunk for getting reports.
 *
 * @returns The reports data.
 */
export const getReports = createAsyncThunk(
    '/admin/getReports',
    async (_, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axiosApiInstance.get(
                `${API_URL}/admin/reports`,
                config
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

/**
 * Async thunk for getting users to review.
 *
 * @returns The users to review data.
 */
export const getUsersToReview = createAsyncThunk(
    '/admin/getUsersToReview',
    async (_, {rejectWithValue}) => {
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
            };

            const {data} = await axiosApiInstance.get(
                `${API_URL}/admin/users`,
                config
            );

            return data;
        } catch (error) {
            if (error.response && error.response.data.message) {
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);

/**
 * Async thunk for controlling a favor.
 *
 * @param formValues - The values for controlling a favor.
 * @returns The result of controlling the favor.
 */
export const controlFavor = createAsyncThunk(
    '/admin/controlFavor',
    async (formValues: ControlFavorValues, {rejectWithValue}) => {
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
                return rejectWithValue(error.response.data.message);
            } else {
                return rejectWithValue(error.message);
            }
        }
    }
);