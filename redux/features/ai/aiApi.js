import { apiSlice } from "../api/apiSlice";

export const aiApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    ai: builder.mutation({
      query: (body) => ({
        url: `ai`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useAiMutation } = aiApi;
