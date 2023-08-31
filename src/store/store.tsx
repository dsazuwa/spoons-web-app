import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { createWrapper } from 'next-redux-wrapper';

import authApi from './services/authApi';
import customerApi from './services/customerApi';
import menuApi from './services/menuApi';
import userApi from './services/userApi';
import userReducer from './slices/userSlice';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',

  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [menuApi.reducerPath]: menuApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      authApi.middleware,
      customerApi.middleware,
      menuApi.middleware,
      userApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(() => store);
