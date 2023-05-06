import {createSlice} from '@reduxjs/toolkit';
import {login, signIn} from '@store/auth/authAsyncActions';
import type {LoginSuccess, LoginFailure, SignInSuccess, SignInFailure} from '@store/auth/authAsyncActions';
import {toast} from "react-toastify";
import {clearAuthTokens, getAccessToken} from "axios-jwt";
import jwt from 'jwt-decode';

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

export interface tokenDecoded {
    id: string;
    email: string;
    type: string;
    admin: boolean,
    iat: number,
    exp: number
}

export interface AuthState {
    status: RequestState;
    token: tokenDecoded | null;
    error: string | null | any;
    toastLoaderId: number | string;
    isLogged: boolean;
};

const token: tokenDecoded | null = getAccessToken() ? jwt(getAccessToken()): null;

const initialState: AuthState = {
    status: 'idle',
    token: token,
    error: null,
    toastLoaderId: null,
    isLogged: !!token,
};

/**
 * This slice manages the authentication state of the user, including logging in
 * and signing up. It uses the Redux Toolkit's `createSlice` function to define
 * the slice's name, initial state, and reducers. It also defines extra reducers
 * to handle the async actions of logging in and signing up using the `login` and
 * `signIn` functions. The slice's state includes whether the user is logged in,
 * the status of the async action, the user's information, the error message, and
 * the ID of the toast loader displayed during the async action.
 */
const authSlice = createSlice({
    name: 'user',
    initialState,

    /**
     * Reducers are functions that handle synchronous updates to the state of the slice.
     * This slice's `logout` reducer clears the user's auth tokens and sets the state
     * to its initial values.
     */
    reducers: {
        logout: (state: AuthState) => {
            clearAuthTokens();
            state.status = 'idle';
            state.token = null;
            state.error = null;
            state.isLogged = false;
        },
    },

    /**
     * Extra reducers are functions that handle asynchronous updates to the state of
     * the slice using the `createAsyncThunk` function. This slice's `extraReducers`
     * handle the async actions of logging in and signing up using the `login` and
     * `signIn` functions.
     */
    extraReducers: builder => {
        builder
            .addCase(login.pending, (state: AuthState, action) => {
                state.toastLoaderId = toast.loading('Logging in...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(login.fulfilled, (state: AuthState, action) => {
                const {message, access} = action.payload as SignInSuccess;
                toast.dismiss(state.toastLoaderId);
                state.isLogged = true;
                state.status = 'fulfilled';
                state.token = jwt(access);
            })
            .addCase(login.rejected, (state: AuthState, action) => {
                const {message} = action.payload as SignInFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error on login', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(signIn.pending, (state: AuthState, action) => {
                state.toastLoaderId = toast.loading('SignIn in...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(signIn.fulfilled, (state: AuthState, action) => {
                toast.dismiss(state.toastLoaderId);
                state.isLogged = true;
                state.status = 'fulfilled';
                state.token = jwt(action.payload.access);
            })
            .addCase(signIn.rejected, (state: AuthState, action) => {
                const {message} = action.payload as SignInFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error on signIn', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
    },
});

export const {logout} = authSlice.actions;

export default authSlice.reducer;