import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

import { setMenu } from './menu.slice';

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
    getMenu: builder.query<{ menu: MenuType<PublicCategoryItemType> }, void>({
      query() {
        return {
          url: `/grouped`,
        };
      },
      async onQueryStarted(arg, api) {
        try {
          const { data } = await api.queryFulfilled;
          api.dispatch(setMenu(data.menu));
        } catch (e) {
          console.log(e);
        }
      },
    }),
  }),
});

export const { useGetMenuQuery } = menuApi;
