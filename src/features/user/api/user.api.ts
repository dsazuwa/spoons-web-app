import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { deleteCookie } from 'cookies-next';
import { HYDRATE } from 'next-redux-wrapper';

import { logout, setUser } from './slices/user.slice';
import { IUser } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  tagTypes: ['User'],

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/users/`,
    credentials: 'include',

    prepareHeaders: (headers) => {
      const token = document.cookie
        .split('; ')
        .find((row) => row.startsWith('access-token'))
        ?.split('=')[1];

      if (token) headers.set('Authorization', `Bearer ${token}`);

      return headers;
    },
  }),

  endpoints: (builder) => ({
    getUser: builder.query<IUser, undefined>({
      query() {
        console.log('called');
        return {
          url: 'me',
        };
      },
      transformResponse: (result: { user: IUser }) => result.user,
      async onQueryStarted(args, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setUser(data));
        } catch (e) {
          console.log(e);

          deleteCookie('access-token');
          dispatch(logout());
        }
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
