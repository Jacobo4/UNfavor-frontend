// Redux
import {createSlice} from '@reduxjs/toolkit';
// Toast
import {toast} from "react-toastify";
// Actions
import {getProfileInfo, updateFavorFilters, updateMyUserInfo, getMatchesHistory } from "@store/user/userAsyncAction";
// Types
import type {UpdateUserInfoSuccess, UpdateUserInfoFailure, UpdateFavorFiltersFailure, UserProfile, getUserProfileInfoSuccess, getMatchesHistorySuccess, getMatchesHistoryFailure} from "@store/user/userAsyncAction";
import { Match } from '../match/matchAsyncAction';

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

export interface UserState {
    status: RequestState;
    myUserInfo: UserProfile;
    anotherUserInfo: UserProfile;
    error: string | null | any;
    toastLoaderId: number | string;
    isMe: boolean;
    matches: Array<Match>;
};

const initialState: UserState = {
    status: 'idle',
    myUserInfo: null,
    anotherUserInfo: null,
    error: null,
    toastLoaderId: null,
    isMe: false,
    matches: [],
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
            .addCase(getProfileInfo.fulfilled, (state: UserState, action) => {
                const {me, user, message} = action.payload as getUserProfileInfoSuccess;
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';

                if(me === user.email){
                    state.myUserInfo = user;
                }else{
                    state.anotherUserInfo = user;
                }
            })
            .addCase(getProfileInfo.rejected, (state: UserState, action) => {
                const {message} = action.payload;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error getting profile info', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(updateMyUserInfo.pending, (state: UserState, action) => {
                state.toastLoaderId = toast.loading('Updating profile info...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(updateMyUserInfo.fulfilled, (state: UserState, action) => {
                toast.dismiss(state.toastLoaderId);
                toast.success('User info updated', {position: 'top-center'})
                state.status = 'fulfilled';
                
            })
            .addCase(updateMyUserInfo.rejected, (state: UserState, action) => {
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
            .addCase(getMatchesHistory.pending, (state: UserState, action) => {
                state.toastLoaderId = toast.loading('Getting matches...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getMatchesHistory.fulfilled, (state: UserState, action) => {
                state.matches = action.payload.matches;
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                console.log(state.matches);
            })
            .addCase(getMatchesHistory.rejected, (state: UserState, action) => {
                const {message} = action.payload as getMatchesHistoryFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error getting matches', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
    },
});

export default userSlice.reducer;
