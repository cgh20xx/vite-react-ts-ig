/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type IGStory = {
  id: string;
  name: string;
  avatar: string;
};

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  endpoints: builder => ({
    getIGStoies: builder.query<IGStory[], string | 'all'>({
      query: id => {
        if (id === 'all') {
          return `stories/`;
        }
        return `stories/${id}`;
      }
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetIGStoiesQuery } = homeApi;
