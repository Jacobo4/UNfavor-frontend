import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import type {
    getMatchesFailure,
    getMatchesSuccess,
    likeMatchFailure,
    likeMatchSuccess,
    Match
} from "@store/match/matchAsyncAction";
import {getMatches, likeMatch} from "@store/match/matchAsyncAction";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

export interface MatchState {
    status: RequestState;
    matches: Array<Match>;
    error: string | null;
    toastLoaderId: number | string;
};

const initialState: MatchState = {
    status: 'idle',
    matches: null,
    error: null,
    toastLoaderId: null,
};

const matchSlice = createSlice({
    reducers: {
        removeMatch: (state: MatchState, action: PayloadAction<number>) => {
            console.log(action.payload)
            state.matches = state.matches.filter((match: Match, index) => {
                return index !== action.payload;
            })
        },
    },
    name: 'favors',
    initialState,

    extraReducers: builder => {
        builder
            .addCase(getMatches.pending, (state: MatchState, action) => {
                state.toastLoaderId = toast.loading('Getting possible matches', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getMatches.fulfilled, (state: MatchState, action) => {
                const {favors} = action.payload as getMatchesSuccess;
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.matches = favors;
            })
            .addCase(getMatches.rejected, (state: MatchState, action) => {
                const {message} = action.payload as getMatchesFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error getting matches', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(likeMatch.pending, (state: MatchState, action) => {
                state.toastLoaderId = toast.loading('Giving ur like a like :)', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(likeMatch.fulfilled, (state: MatchState, action) => {
                const {favor} = action.payload as likeMatchSuccess;
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
            })
            .addCase(likeMatch.rejected, (state: MatchState, action) => {
                const {message} = action.payload as likeMatchFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error giving a like :(', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
    },
});
export const {removeMatch} = matchSlice.actions;

export default matchSlice.reducer;
