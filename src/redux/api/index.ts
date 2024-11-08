import { BaseQueryFn, createApi } from "@reduxjs/toolkit/query/react";
import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  baseUrl: process.env.NEXT_PUBLIC_INSTAGRAM_API_URL,
});

const baseQueryExtands: BaseQueryFn = async (arg, api, extraOptions) => {
  const result = await baseQuery(arg, api, extraOptions);
  return result;
};

export const api = createApi({
  reducerPath: "api",
  baseQuery: baseQueryExtands,
  refetchOnFocus: true,
  refetchOnReconnect: true,
  tagTypes: ["auth"],
  endpoints: () => ({}),
});