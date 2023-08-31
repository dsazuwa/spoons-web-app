import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { setUser } from '@store/slices/userSlice';
import { IVerifyData, IVerifyResponse } from '@store/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

const customerApi = createApi({
  reducerPath: 'customerApi',
  refetchOnFocus: true,
  tagTypes: ['Customer'],

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/customers/`,
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

export default customerApi;
