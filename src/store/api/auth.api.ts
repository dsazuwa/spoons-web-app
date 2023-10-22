import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { logout, setUser } from '../slices/user.slice';
import {
  IGenericResponse,
  ILoginInput,
  ILoginResponse,
  IRecoverData,
  IRecoverResponse,
  IRegisterInput,
  IRegisterResponse,
  IRequestRecoverData,
  IVerifyRecoverData,
} from '../types';

export const authApi = createApi({
  reducerPath: 'authApi',

  baseQuery: fetchBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_API_URL}/auth/`,
    credentials: 'include',
  }),

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  endpoints: (builder) => ({
    loginUser: builder.mutation<ILoginResponse, ILoginInput>({
      query(data) {
        return {
          url: 'login',
          method: 'POST',
          body: data,
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

    logoutUser: builder.mutation<void, void>({
      query() {
        return {
          url: 'logout',
          method: 'POST',
        };
      },
      async onQueryStarted(args, api) {
        try {
          await api.queryFulfilled;
          api.dispatch(logout());
        } catch (e) {
          console.log(e);
        }
      },
    }),

    registerUser: builder.mutation<IRegisterResponse, IRegisterInput>({
      query(data) {
        return {
          url: 'register',
          method: 'POST',
          body: data,
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

    requestPasswordRecovery: builder.mutation<
      IGenericResponse,
      IRequestRecoverData
    >({
      query(data) {
        return {
          url: 'recover',
          method: 'POST',
          body: data,
        };
      },
    }),

    verifyRecoveryCode: builder.mutation<IGenericResponse, IVerifyRecoverData>({
      query(data) {
        return {
          url: `recover/${data.code}`,
          method: 'POST',
          body: { email: data.email },
        };
      },
    }),

    recoverPassword: builder.mutation<IRecoverResponse, IRecoverData>({
      query(data) {
        return {
          url: `recover/${data.code}`,
          method: 'PATCH',
          body: { email: data.email, password: data.password },
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
  }),
});

export const {
  useLoginUserMutation,
  useLogoutUserMutation,
  useRegisterUserMutation,
  useRequestPasswordRecoveryMutation,
  useVerifyRecoveryCodeMutation,
  useRecoverPasswordMutation,
} = authApi;
