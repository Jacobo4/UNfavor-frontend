import {createSlice} from '@reduxjs/toolkit';
import {login, LoginSuccess, LoginFailure} from '@store/auth/authAsyncActions';
import {toast} from "react-toastify";
import {clearAuthTokens} from "axios-jwt";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';
export interface AuthState {
    status: RequestState;
    userInfo: any;
    error: string | null | any;
    toastLoaderId: number | string;
};


const initialState: AuthState = {
    status: 'idle',
    userInfo: null,
    error: null,
    toastLoaderId: null,
};


const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        logout: (state:AuthState) => {
            clearAuthTokens();
            state.status = 'idle';
            state.userInfo = null;
            state.error = null;
        },
    },

    extraReducers: builder => {
        builder
            .addCase(login.pending, (state:AuthState, action) => {
                state.toastLoaderId = toast.loading('Logging in...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(login.fulfilled, (state:AuthState, action ) => {
                const {access, refresh} = action.payload as LoginSuccess;
                toast.dismiss(state.toastLoaderId);
                // toast.success('Login successful!', {position: 'top-center', autoclose: 1500});
                state.status = 'fulfilled';
            })
            .addCase(login.rejected, (state:AuthState, action) => {
                const {message} = action.payload as LoginFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error on login', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
    },
    // extraReducers: {
    //   // register user
    //   [registerUser.pending]: (state) => {
    //     state.status = true
    //     state.error = null
    //   },
    //   [registerUser.fulfilled]: (state, { payload }) => {
    //     state.status = false
    //     state.success = true // registration successful
    //   },
    //   [registerUser.rejected]: (state, { payload }) => {
    //     state.status = false
    //     state.error = payload
    //   },
    // },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;