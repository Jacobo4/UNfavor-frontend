// Redux
import {createSlice} from '@reduxjs/toolkit';
// Toast
import {toast} from "react-toastify";
// Actions
import {
    getProfileInfo,
    updateFavorFilters,
    updateMyUserInfo,
    reportUser, reportUserSuccess, reportUserFailure
} from "@store/user/userAsyncAction";
// Types
import type {UpdateUserInfoSuccess, UpdateUserInfoFailure, UpdateFavorFiltersFailure, UserProfile, getUserProfileInfoSuccess, 
    } from "@store/user/userAsyncAction";
import { Match } from '../match/matchAsyncAction';

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

export interface UserState {
    status: RequestState;
    myUserInfo: UserProfile;
    anotherUserInfo: UserProfile;
    error: string | null;   
    toastLoaderIds: Object;
    isMe: boolean;
    
};

const initialState: UserState = {
    status: 'idle',
    myUserInfo: null,
    anotherUserInfo: null,
    error: null,
    toastLoaderIds: {},
    isMe: false,
    
};

const userSlice = createSlice({
    reducers: undefined,
    name: 'user',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(reportUser.pending, (state: UserState, action) => {
                state.toastLoaderIds['reportUser'] = toast.loading('Reporting user...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(reportUser.fulfilled, (state: UserState, action) => {
                const {message} = action.payload as reportUserSuccess;
                toast.dismiss(state.toastLoaderIds['reportUser']);
                state.status = 'fulfilled';
            })
            .addCase(reportUser.rejected, (state: UserState, action) => {
                const {message} = action.payload as reportUserFailure;
                toast.dismiss(state.toastLoaderIds['reportUser']);
                toast.error('Error reporting user', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(getProfileInfo.pending, (state: UserState, action) => {
                state.toastLoaderIds['getProfileInfo'] = toast.loading('Getting profile info in...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getProfileInfo.fulfilled, (state: UserState, action) => {
                const {me, user, message} = action.payload as getUserProfileInfoSuccess;
                toast.dismiss(state.toastLoaderIds['getProfileInfo']);
                state.status = 'fulfilled';

                if(me === user.email){
                    state.myUserInfo = user;
                }else{
                    state.anotherUserInfo = user;
                }
            })
            .addCase(getProfileInfo.rejected, (state: UserState, action) => {
                const {message} = action.payload;
                toast.dismiss(state.toastLoaderIds['getProfileInfo']);
                toast.error('Error getting profile info', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(updateMyUserInfo.pending, (state: UserState, action) => {
                state.toastLoaderIds['updateMyUserInfo'] = toast.loading('Updating profile info...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(updateMyUserInfo.fulfilled, (state: UserState, action) => {
                toast.dismiss(state.toastLoaderIds['updateMyUserInfo']);
                toast.success('User info updated', {position: 'top-center'})
                state.status = 'fulfilled';
                
            })
            .addCase(updateMyUserInfo.rejected, (state: UserState, action) => {
                const {message} = action.payload as UpdateUserInfoFailure;
                toast.dismiss(state.toastLoaderIds['updateMyUserInfo']);
                toast.error('Error updating user info', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(updateFavorFilters.pending, (state: UserState, action) => {
                state.toastLoaderIds['updateFavorFilters'] = toast.loading('Updating favor filters...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(updateFavorFilters.fulfilled, (state: UserState, action) => {
                toast.dismiss(state.toastLoaderIds['updateFavorFilters']);
                toast.success('Favor filters updated', {position: 'top-center'})
                state.status = 'fulfilled';
            })
            .addCase(updateFavorFilters.rejected, (state: UserState, action) => {
                const {message} = action.payload as UpdateFavorFiltersFailure;
                toast.dismiss(state.toastLoaderIds['updateFavorFilters']);
                toast.error('Error updating favor filters', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            
    },
});

export default userSlice.reducer;
