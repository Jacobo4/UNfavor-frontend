import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {toast} from "react-toastify";
import type {
    getMatchesFailure,
    getMatchesSuccess,
    likeMatchFailure,
    likeMatchSuccess,
    matchActioFailure,
    matchActionSuccess,
    Match,
    getMatchesHistoryValues,
    getMatchesHistorySuccess, getMatchesHistoryFailure, dislikeMatchSuccess, dislikeMatchFailure
} from "@store/match/matchAsyncAction";
import {getMatches, likeMatch, matchAction, getMatchesHistory, dislikeMatch} from "@store/match/matchAsyncAction";

type RequestState = 'pending' | 'fulfilled' | 'rejected' | 'idle';

export interface MatchState {
    status: RequestState;
    matches: Array<Match>;
    toastLoaderIds: Object;
    error: string | null;
    toastLoaderId: number | string;
    myMatches: Array<Match>;
    myFinishedMatches: Array<Match>;
    finished: boolean;
    
};

const initialState: MatchState = {
    status: 'idle',
    matches: null,
    toastLoaderIds: {},
    error: null,
    toastLoaderId: null,
    myMatches: [],
    myFinishedMatches: [],  
    finished: false,
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
            .addCase(dislikeMatch.pending, (state: MatchState, action) => {
                state.toastLoaderId = toast.loading('Giving a dislike :(', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(dislikeMatch.fulfilled, (state: MatchState, action) => {
                // const {favor} = action.payload as dislikeMatchSuccess;
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
            })
            .addCase(dislikeMatch.rejected, (state: MatchState, action) => {
                const {message} = action.payload as dislikeMatchFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error giving a like :(', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(matchAction.pending, (state: MatchState, action) => {
                state.toastLoaderId = toast.loading('Updating favor status...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(matchAction.fulfilled, (state: MatchState, action) => {
                const {message} = action.payload as matchActionSuccess;
                toast.dismiss(state.toastLoaderId);
                state.status = 'fulfilled';
                state.finished = true;
            })
            .addCase(matchAction.rejected, (state: MatchState, action) => {
                const {message} = action.payload as matchActioFailure;
                toast.dismiss(state.toastLoaderId);
                toast.error('Error updating favor status', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })
            .addCase(getMatchesHistory.pending, (state: MatchState, action) => {
                state.toastLoaderIds['getMatchesHistory'] = toast.loading('Getting matches...', {position: 'top-center'});
                state.status = 'pending';
                state.error = null;
            })
            .addCase(getMatchesHistory.fulfilled, (state: MatchState,  action) => {
                
                toast.dismiss(state.toastLoaderIds['getMatchesHistory']);
                state.status = 'fulfilled'; 
                state.myMatches = action.payload.matches;
                state.myFinishedMatches = action.payload.matches;
            })
            .addCase(getMatchesHistory.rejected, (state: MatchState, action) => {
                const {message} = action.payload as getMatchesHistoryFailure;
                toast.dismiss(state.toastLoaderIds['getMatchesHistory']);
                toast.error('Error getting matches', {position: 'top-center'})
                state.status = 'rejected';
                state.error = message;
            })

    },
});
export const {removeMatch} = matchSlice.actions;

export default matchSlice.reducer;
