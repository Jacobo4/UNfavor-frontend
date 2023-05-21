import {createSlice} from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import {getAdminInfo} from "@store/Admin/adminAsyncActions";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';
export interface AdminState {
    status: RequestState;
    adminInfo: any;
    error: string | null | any;
    toastLoaderId: number | string;
};

const initialState: AdminState = {
    status: 'idle',
    adminInfo: null,
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
            })
            .addCase(getAdminInfo.rejected, (state: AdminState, action) => {
                const {message} = action.payload;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error obtaining info', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
    }
});

export default adminSlice.reducer;
