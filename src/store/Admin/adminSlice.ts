import {createSlice} from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import {getAdminInfo, getUsersToReview, controlFavor, getReports} from "@store/Admin/adminAsyncActions";
import type {ControlFavorSuccess, ControlFavorFailure, controlFavorFormValues} from "@store/Admin/adminAsyncActions";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

export interface AllUserInfo {
    favor: {
        reviews: {
            review_sum: number;
            review_num: number;
            comments: Array<string>;
        },
        date_published: string;
        favor_state: string;
        title: string;
        description: string;
        location: string;
        possible_matches: Array<string>;
        imgURL: string;
    },
    preferences: {
        favor_filters: {
            favor_type: string;
            max_distance_km: number;
        }
    },
    _id: string;
    name: string;
    email: string;
    phone: string;
    age: number,
    admin: boolean,
    __v: number
}

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
export interface AdminState {
    status: RequestState;
    adminInfo: any;
    usersToReview: Array<AllUserInfo>;
    usersPublished: Array<AllUserInfo>;
    reports: Array<Report>;
    error: string | null;
    toastLoaderId: number | string;
};

const initialState: AdminState = {
    status: 'idle',
    adminInfo: null,
    usersToReview: [],
    usersPublished: [],
    reports: [],
    error: null,
    toastLoaderId: null,
};

const adminSlice = createSlice({
    reducers: undefined,
    name: 'admin',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(getAdminInfo.pending, (state: AdminState, action) => {
                state.toastLoaderId = toast.loading('Getting Admin info in...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getAdminInfo.fulfilled, (state: AdminState, {payload}) => {
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.adminInfo = payload.data;
                console.log(state.adminInfo);
            })
            .addCase(getAdminInfo.rejected, (state: AdminState, action) => {
                const {message} = action.payload;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error obtaining info', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(getReports.pending, (state: AdminState, action) => {
                state.toastLoaderId = toast.loading('Getting reported users...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getReports.fulfilled, (state: AdminState, {payload}) => {
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.reports = payload.reports;
            })
            .addCase(getReports.rejected, (state: AdminState, action) => {
                const {message} = action.payload;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error getting reported users', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(getUsersToReview.pending, (state: AdminState, action) => {
                state.toastLoaderId = toast.loading('Getting Admin info in...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getUsersToReview.fulfilled, (state: AdminState, {payload}) => {
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.usersToReview = payload.users.filter(user => user.favor.favor_state === "REVIEWING");
                state.usersPublished = payload.users.filter(user => user.favor.favor_state === "PUBLISHED");

            })
            .addCase(getUsersToReview.rejected, (state: AdminState, action) => {
                const {message} = action.payload;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error obtaining info', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(controlFavor.pending, (state: AdminState, action) => {
                    state.toastLoaderId = toast.loading('Updating favors', {position: 'top-center'});
                    state.status = 'pending';
                    state.error = null;
                }
            )
            .addCase(controlFavor.fulfilled, (state: AdminState, {payload}) => {
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.usersToReview = state.usersToReview.filter(user => user._id !== payload.userId)
            })
            .addCase(controlFavor.rejected, (state: AdminState, action) => {
                const {message} = action.payload;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error updating favor', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
    }
});

export default adminSlice.reducer;
