import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import baseQueryWithReauth from '@store/base.query';
import { setUser } from './slices/user.slice';
import { IUser } from './types';

const baseUrl = '/users';

export const userApi = createApi({
  reducerPath: 'userApi',
  refetchOnFocus: true,
  tagTypes: ['User'],
  baseQuery: baseQueryWithReauth,

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  endpoints: (builder) => ({
    getUser: builder.query<IUser, undefined>({
      query() {
        return {
          url: `${baseUrl}/me`,
          credentials: 'include',
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
