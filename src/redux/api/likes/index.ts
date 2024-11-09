import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    toLike: build.mutation<LIKE.ToLikeResponse, LIKE.ToLikeRequest>({
      query: (postId) => ({
        url: "/post/like",
        method: "POST",
        body: {
          postId,
        },
      }),
      invalidatesTags: ["like"],
    }),
    isLiked: build.query<LIKE.IsLikedResponse, LIKE.IsLikedRequest>({
      query: (postId) => ({
        url: `/post/get-like/${postId}`,
        method: "GET",
      }),
      providesTags: ["like"],
    }),
    unLike: build.mutation<LIKE.UnLikeResponse, LIKE.UnLikeRequest>({
      query: (postId) => ({
        url: "/post/unlike",
        method: "DELETE",
        body: {
          postId,
        },
      }),
      invalidatesTags: ["like"],
    }),
  }),
});

export const { useToLikeMutation, useIsLikedQuery, useUnLikeMutation } = api;
