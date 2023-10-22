import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const modifierApi = createApi({
  reducerPath: 'modifierApi',
  refetchOnFocus: true,
  tagTypes: ['Modifier'],

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/menu/modifiers`,
  }),

  endpoints: (builder) => ({
    getModifier: builder.query<{ modifiers: Modifier[] }, number>({
      query(data) {
        return {
          method: 'GET',
          url: `/${data}`,
        };
      },
    }),

    getItemModifiers: builder.query<{ modifiers: Modifier[] }, number>({
      query(data) {
        return {
          method: 'GET',
          url: `/item/${data}`,
        };
      },
    }),
  }),
});

export const {
  useGetModifierQuery,
  useLazyGetModifierQuery,
  useGetItemModifiersQuery,
  useLazyGetItemModifiersQuery,
} = modifierApi;
