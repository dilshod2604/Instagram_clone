import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    getAllPosts: build.query<
      POSTS.GetAllPostsResponse,
      POSTS.GetAllPostsRequest
    >({
      query: () => ({
        url: "/post/get-all",
        method: "GET",
      }),
      providesTags: ["post"],
    }),
  }),
});
export const { useGetAllPostsQuery } = api;
