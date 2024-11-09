import { api as index } from "..";
const api = index.injectEndpoints({
  endpoints: (build) => ({
    uploadFile: build.mutation<
      UPPLOADFILE.UpploadFileResponse,
      UPPLOADFILE.UpploadFileRequest
    >({
      query: (formData) => ({
        url: "/upload/file",
        method: "POST",
        body: formData,
      }),
      invalidatesTags: ["files"],
    }),
  }),
});
export const { useUploadFileMutation } = api;
