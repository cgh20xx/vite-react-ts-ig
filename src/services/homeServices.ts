/* React-specific entry point that automatically generates
   hooks corresponding to the defined endpoints */
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

type IGStory = {
  id: string;
  name: string;
  avatar: string;
};

type IGPost = {
  id: string;
  location: string;
  account: string;
  avatar: string;
  photo: string;
  likes: number;
  description: string;
  hashTags: string;
  createTime: string;
};

export const homeApi = createApi({
  reducerPath: 'homeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3004/' }),
  endpoints: builder => ({
    // 取得限時動態
    getIGStories: builder.query<IGStory[], string | 'all'>({
      query: id => {
        if (id === 'all') {
          return `stories/`;
        }
        return `stories/${id}`;
      }
    }),
    // 取得動態牆
    getIGPosts: builder.query<IGPost[], string>({
      query: id => {
        if (id === 'all') {
          return `posts/`;
        }
        return `posts/${id}`;
      }
    })
  })
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetIGStoriesQuery, useGetIGPostsQuery } = homeApi;
