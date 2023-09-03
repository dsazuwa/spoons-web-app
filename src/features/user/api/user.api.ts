import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { setUser } from './slices/user.slice';
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
  }),

  endpoints: (builder) => ({
    getUser: builder.query<IUser, undefined>({
      query() {
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
        }
      },
    }),
  }),
});

export const { useGetUserQuery } = userApi;
