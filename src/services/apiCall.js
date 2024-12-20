import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { build } from "vite";

const apiCall = createApi({
  //step 1: Inbuit object
  reducerPath: "apiCall",
  //step 2: Base URL
  baseQuery: fetchBaseQuery({
    baseUrl: "https://jsonplaceholder.typicode.com/",
  }),
  //Step 3: defining methods --> "GET", "POST", etc..
  endpoints: (builder) => ({
    getPost: builder.query({ query: () => "posts" }),
    creatPost: builder.mutation({
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
