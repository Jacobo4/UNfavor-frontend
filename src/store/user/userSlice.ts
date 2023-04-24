import {createSlice} from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import {getProfileInfo} from "@store/user/userAsyncAction";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';
export interface UserState {
    status: RequestState;
    userInfo: any;
    error: string | null | any;
    toastLoaderId: number | string;
};

const initialState: UserState = {
    status: 'idle',
    userInfo: null,
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
    }
});

export default userSlice.reducer;
