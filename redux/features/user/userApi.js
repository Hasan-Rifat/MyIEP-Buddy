import { apiSlice } from "../api/apiSlice";
import { setUserInfo } from "./userSlice";

export const userApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (body) => ({
        url: `user/login`,
        method: "POST",
        body,
      }),
    }),
    userRegister: builder.mutation({
      query: (body) => ({
        url: `user/register`,
        method: "POST",
        body,
      }),
    }),
  }),
});

export const { useUserLoginMutation, useUserRegisterMutation } = userApi;
