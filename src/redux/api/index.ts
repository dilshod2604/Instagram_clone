import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_INSTAGRAM_API_URL,
});

const baseQueryExtands: BaseQueryFn = (arg, api, extraOptions) => {
  const result = baseQuery(arg, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtands,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: [],
  endpoints: () => ({}),
});
