import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import {Post} from "../../models/api";

const baseQuery = fetchBaseQuery({
  baseUrl: `https://jsonplaceholder.typicode.com`,
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({
    getPosts: builder.query<Post[], null>({
      query: () => {
        return `/posts`;
      },
    }),
  }),
});

export const { useGetPostsQuery } = api;
