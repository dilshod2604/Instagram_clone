import { api as index } from "..";

const api = index.injectEndpoints({
  endpoints: (build) => ({
    signUp: build.mutation<AUTH.SignUpResponse, AUTH.SignUpRequest>({
      query: (data) => ({
        url: "/auth/sign-up",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
    signIn: build.mutation<AUTH.SignInResponse, AUTH.SignInRequest>({
      query: (data) => ({
        url: "/auth/sign-in",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["auth"],
    }),
  }),
});
export const {useSignUpMutation,useSignInMutation}=api
