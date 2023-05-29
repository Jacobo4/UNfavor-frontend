import {createSlice} from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import {
    getStatistics,
    getUsersToReview,
    controlFavor,
    getReports,
    GetStatisticsSuccess,
    GetStatisticsInfoFailure,
    GetReportsSuccess,
    GetReportsFailure,
    GetUsersToReviewSuccess,
    GetUsersToReviewFailure, Statistics, Report
} from "@store/Admin/adminAsyncActions";
import type {ControlFavorSuccess, ControlFavorFailure, ControlFavorValues} from "@store/Admin/adminAsyncActions";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

/**
 * Represents the user information.
 */
export interface AllUserInfo {
    favor: {
        reviews: {
            review_sum: number;
            review_num: number;
            comments: Array<string>;
        };
        date_published: string;
        favor_state: string;
        title: string;
        description: string;
        location: string;
        possible_matches: Array<string>;
        imgURL: string;
    };
    preferences: {
        favor_filters: {
            favor_type: string;
            max_distance_km: number;
        };
    };
    _id: string;
    name: string;
    email: string;
    phone: string;
    age: number;
    admin: boolean;
    __v: number;
}

/**
 * Represents the state of the admin module.
 */
export interface AdminState {
    status: RequestState;
    statistics: Statistics;
    usersToReview: Array<AllUserInfo>;
    usersPublished: Array<AllUserInfo>;
    reports: Array<Report>;
    error: string | null;
    toastLoaderId: number | string | null;
}

/**
 * The initial state for the admin module.
 */
const initialState: AdminState = {
    status: 'idle',
    statistics: null,
    usersToReview: [],
    usersPublished: [],
    reports: [],
    error: null,
    toastLoaderId: null,
};

/**
 * The admin slice of the Redux store.
 */
const adminSlice = createSlice({
    reducers: undefined,
    name: 'admin',
    initialState,

    extraReducers: builder => {
        builder
            //=========================== Get statistics =======================
            .addCase(getStatistics.pending, (state: AdminState, action) => {
                state.toastLoaderId = toast.loading('Getting Admin info in...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getStatistics.fulfilled, (state: AdminState, action) => {
                const {data} = action.payload as GetStatisticsSuccess;
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.statistics = data;
            })
            .addCase(getStatistics.rejected, (state: AdminState, action) => {
                const {message} = action.payload as GetStatisticsInfoFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error obtaining info', {position: 'top-center'});
                state.status = 'rejected';
                state.error = message;
            })
            //=========================== Get reports =======================
            .addCase(getReports.pending, (state: AdminState, action) => {
                state.toastLoaderId = toast.loading('Getting reported users...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getReports.fulfilled, (state: AdminState, action) => {
                const {reports} = action.payload as GetReportsSuccess;
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.reports = reports;
            })
            .addCase(getReports.rejected, (state: AdminState, action) => {
                const {message} = action.payload as GetReportsFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error getting reported users', {position: 'top-center'});
                state.status = 'rejected';
                state.error = message;
            })
            //=========================== Get users to review =======================
            .addCase(getUsersToReview.pending, (state: AdminState, action) => {
                state.toastLoaderId = toast.loading('Getting Admin info in...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getUsersToReview.fulfilled, (state: AdminState, action) => {
                const {users} = action.payload as GetUsersToReviewSuccess;

                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.usersToReview = users.filter(user => user.favor.favor_state === "REVIEWING");
                state.usersPublished = users.filter(user => user.favor.favor_state === "PUBLISHED");
            })
            .addCase(getUsersToReview.rejected, (state: AdminState, action) => {
                const {message} = action.payload as GetUsersToReviewFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error obtaining info', {position: 'top-center'});
                state.status = 'rejected';
                state.error = message;
            })
            //=========================== Control favor =======================
            .addCase(controlFavor.pending, (state: AdminState, action) => {
                state.toastLoaderId = toast.loading('Updating favors', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(controlFavor.fulfilled, (state: AdminState, action) => {
                const {message, data,userId} = action.payload as ControlFavorSuccess;
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.usersToReview = state.usersToReview.filter(user => user._id !== userId);
            })
            .addCase(controlFavor.rejected, (state: AdminState, action) => {
                const {message} = action.payload as ControlFavorFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error updating favor', {position: 'top-center'});
                state.status = 'rejected';
                state.error = message;
            });
    },
});

export default adminSlice.reducer;