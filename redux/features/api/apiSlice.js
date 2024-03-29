import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://my-iep-buddy-server.vercel.app/api/v1/",
  }),

  endpoints: (builder) => ({}),
  tagTypes: ["goals"],
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints

export default apiSlice;
