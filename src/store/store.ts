import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import logger from 'redux-logger';
// Reducers
import authReducer from './auth/authSlice';
import userReducer from './user/userSlice';
export const store = configureStore({
  reducer: {
    auth: authReducer,
    user: userReducer,
  },
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
