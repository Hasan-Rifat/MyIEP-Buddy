import { configureStore } from "@reduxjs/toolkit";
import apiSlice from "./features/api/apiSlice";
import userInfoSlice from "./features/user/userSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    userInfo: userInfoSlice,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
