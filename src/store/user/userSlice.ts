import {createSlice} from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import {getProfileInfo,updateUserInfo,updateFavorFilters} from "@store/user/userAsyncAction";
import type {UpdateUserInfoSuccess, UpdateUserInfoFailure, UpdateFavorFiltersFailure} from "@store/user/userAsyncAction";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

export interface UserState {
    status: RequestState;
    userInfo: any;
    error: string | null | any;
    toastLoaderId: number | string;
    isMe: boolean;
};

const initialState: UserState = {
    status: 'idle',
    userInfo: null,
    error: null,
    toastLoaderId: null,
    isMe: false,
};

const userSlice = createSlice({
    reducers: undefined,
    name: 'user',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(getProfileInfo.pending, (state: UserState, action) => {
                state.toastLoaderId = toast.loading('Getting profile info in...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getProfileInfo.fulfilled, (state: UserState, {payload}) => {
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.userInfo = payload.user;
            })
            .addCase(getProfileInfo.rejected, (state: UserState, action) => {
                const {message} = action.payload;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error on login', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(updateUserInfo.pending, (state: UserState, action) => {
                state.toastLoaderId = toast.loading('Updating profile info...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(updateUserInfo.fulfilled, (state: UserState, action) => {
                
                toast.dismiss(state.toastLoaderId);
                toast.success('User info updated', {position: 'top-center'})
                state.status = 'fulfilled';
                
            })
            .addCase(updateUserInfo.rejected, (state: UserState, action) => {
                const {message} = action.payload as UpdateUserInfoFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error updating user info', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(updateFavorFilters.pending, (state: UserState, action) => {
                state.toastLoaderId = toast.loading('Updating favor filters...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(updateFavorFilters.fulfilled, (state: UserState, action) => {
                toast.dismiss(state.toastLoaderId);
                toast.success('Favor filters updated', {position: 'top-center'})
                state.status = 'fulfilled';
            })
            .addCase(updateFavorFilters.rejected, (state: UserState, action) => {
                const {message} = action.payload as UpdateFavorFiltersFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error updating favor filters', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
    },
});

export default userSlice.reducer;
