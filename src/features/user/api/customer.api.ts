import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { setUser } from './slices/user.slice';
import { IVerifyData, IVerifyResponse } from './types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const customerApi = createApi({
  reducerPath: 'customerApi',
  refetchOnFocus: true,
  tagTypes: ['Customer'],

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/customers/`,
    credentials: 'include',
  }),

  endpoints: (builder) => ({
    verifyUser: builder.mutation<IVerifyResponse, IVerifyData>({
      query(data) {
        return {
          url: `/me/verify/${data.code}`,
          method: 'PATCH',
        };
      },
      async onQueryStarted(arg, api) {
        try {
          const { data } = await api.queryFulfilled;
          api.dispatch(setUser(data.user));
        } catch (e) {
          console.log(e);
        }
      },
    }),

    resendVerification: builder.mutation<void, void>({
      query() {
        return {
          url: '/me/verify',
          method: 'POST',
        };
      },
    }),
  }),
});

export const { useVerifyUserMutation, useResendVerificationMutation } =
  customerApi;
