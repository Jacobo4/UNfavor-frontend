import {createSlice} from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import {getProfileInfo, getUserProfileInfoSuccess, updateMyUserInfo, UserProfile} from "@store/user/userAsyncAction";
import type {UpdateUserInfoSuccess, UpdateUserInfoFailure} from "@store/user/userAsyncAction";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

export interface UserState {
    status: RequestState;
    myUserInfo: UserProfile;
    anotherUserInfo: UserProfile;
    error: string | null | any;
    toastLoaderId: number | string;
};

const initialState: UserState = {
    status: 'idle',
    myUserInfo: null,
    anotherUserInfo: null,
    error: null,
    toastLoaderId: null,
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
    },
});

export default userSlice.reducer;
