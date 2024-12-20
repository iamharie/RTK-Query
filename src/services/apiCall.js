import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { build } from "vite";

export const apiCall = createApi({
  //step 1: Inbuit object
  reducerPath: "apiCall",
  //step 2: Base URL
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  refetchOnFocus: true,
  //Step 3: defining methods --> "GET", "POST", etc..
  endpoints: (builder) => ({
    getPost: builder.query({ query: () => "posts", keepUnusedDataFor: 20 }),
    createPost: builder.mutation({
      query: (newPost) => ({
        url: "posts",
        method: "POST",
        body: newPost,
      }),
    }),
  }),
});

//Automatically created hooks from RTK Library based on the created endpoints
export const { useGetPostQuery, useCreatePostMutation } = apiCall;
