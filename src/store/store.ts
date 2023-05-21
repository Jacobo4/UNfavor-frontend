import {configureStore, ThunkAction, Action, combineReducers} from '@reduxjs/toolkit';
import logger from 'redux-logger';
// Reducers
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';
import adminReducer from './Admin/adminSlice';

const combinedReducer = combineReducers({
   auth: authReducer,
    user: userReducer,
    admin: adminReducer,
});

const rootReducer = (state, action) => {
  if (action.type === 'user/logout') {
    state = undefined;
  }
  return combinedReducer(state, action);
};

export const store = configureStore({
  reducer: rootReducer,
  // Just for debbuging purposes
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
