import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { IGroupedMenuResponse, IMenuResponse } from '@store/types';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const menuApi = createApi({
  reducerPath: 'menuApi',
  refetchOnFocus: true,
  tagTypes: ['Menu'],

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },

  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/menu/`,
  }),

  endpoints: (builder) => ({
    getMenu: builder.query<IMenuResponse, void>({
      query() {
        return {
          url: '',
        };
      },
    }),

    getGroupedMenu: builder.query<IGroupedMenuResponse, void>({
      query() {
        return {
          url: `/grouped`,
        };
      },
    }),
  }),
});

export const { useGetMenuQuery, useGetGroupedMenuQuery } = menuApi;
