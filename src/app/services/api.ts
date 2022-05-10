import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { LocationSearch } from "../../models/api/weather";

const baseQuery = fetchBaseQuery({
  baseUrl: `https://www.metaweather.com/api`,
});

export const api = createApi({
  reducerPath: "api",
  baseQuery,
  endpoints: (builder) => ({
    searchLocations: builder.query<LocationSearch[], string>({
      query: (query: string) => {
        return `/location/search?query=${query}`;
      },
    }),
  }),
});

export const { useSearchLocationsQuery } = api;
