import { createApi } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import baseQueryWithReauth from '@store/base.query';
import { setUser } from '../slices/user.slice';
import { IVerifyData, IVerifyResponse } from '../types';

const baseUrl = '/customers';

export const customerApi = createApi({
  reducerPath: 'customerApi',
  refetchOnFocus: true,
  tagTypes: ['Customer'],
  baseQuery: baseQueryWithReauth,

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  endpoints: (builder) => ({
    verifyUser: builder.mutation<IVerifyResponse, IVerifyData>({
      query(data) {
        return {
          url: `${baseUrl}/me/verify/${data.code}`,
          method: 'PATCH',
          credentials: 'include',
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
          url: `${baseUrl}/me/verify`,
          method: 'POST',
          credentials: 'include',
        };
      },
    }),
  }),
});

export const { useVerifyUserMutation, useResendVerificationMutation } =
  customerApi;
