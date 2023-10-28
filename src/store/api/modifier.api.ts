import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { HYDRATE } from 'next-redux-wrapper';

const BASE_URL = process.env.NEXT_PUBLIC_API_URL as string;

export const modifierApi = createApi({
  reducerPath: 'modifierApi',
  tagTypes: ['Modifier'],

  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) return action.payload[reducerPath];
  },

  baseQuery: fetchBaseQuery({
    baseUrl: `${BASE_URL}/menu/modifiers`,
  }),

  endpoints: (builder) => ({
    getModifier: builder.query<{ modifiers: Modifier[] }, number>({
      query(id) {
        return {
          method: 'GET',
          url: `/${id}`,
        };
      },
    }),

    getChildModifier: builder.query<
      { name: string; modifiers: Modifier[] },
      number
    >({
      query(id) {
        return {
          method: 'GET',
          url: `/child/${id}`,
        };
      },
    }),

    getItemModifiers: builder.query<{ modifiers: Modifier[] }, number>({
      query(id) {
        return {
          method: 'GET',
          url: `/item/${id}`,
        };
      },
    }),
  }),
});

export const {
  useGetModifierQuery,
  useGetChildModifierQuery,
  useLazyGetModifierQuery,
  useGetItemModifiersQuery,
  useLazyGetItemModifiersQuery,
} = modifierApi;
