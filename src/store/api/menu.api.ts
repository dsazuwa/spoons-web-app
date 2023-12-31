import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { setMenu, setOrderMenu } from '../slices/menu.slice';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const menuApi = createApi({
  reducerPath: 'menuApi',
  refetchOnFocus: true,
  tagTypes: ['Menu'],

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/menu/`,
  }),

  endpoints: (builder) => ({
    getMenu: builder.query<GroupedMenuResponseType, void>({
      query() {
        return {
          url: `/grouped`,
        };
      },
      async onQueryStarted(arg, api) {
        try {
          const { data } = await api.queryFulfilled;
          api.dispatch(setMenu(data));
        } catch (e) {
          console.log(e);
        }
      },
    }),

    getOrderMenu: builder.query<GroupedMenuResponseType, void>({
      query() {
        return {
          url: `/order`,
        };
      },
      async onQueryStarted(arg, api) {
        try {
          const { data } = await api.queryFulfilled;
          api.dispatch(setOrderMenu(data));
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useGetMenuQuery, useGetOrderMenuQuery } = menuApi;
