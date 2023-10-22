import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { createWrapper } from 'next-redux-wrapper';

import { authApi, customerApi, menuApi, userApi } from './api';
import { menuReducer } from './slices/menu.slice';
import { userReducer } from './slices/user.slice';

export const store = configureStore({
  devTools: process.env.NODE_ENV === 'development',

  reducer: {
    [menuApi.reducerPath]: menuApi.reducer,
    menuState: menuReducer,

    [authApi.reducerPath]: authApi.reducer,
    [customerApi.reducerPath]: customerApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    userState: userReducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([
      menuApi.middleware,

      authApi.middleware,
      customerApi.middleware,
      userApi.middleware,
    ]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export const wrapper = createWrapper(() => store);
