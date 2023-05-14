import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  person: {},
};

const userInfoSlice = createSlice({
  name: "userInfo",
  initialState,
  reducers: {
    setUserInfo: (state, action) => {
      state.person = action.payload;
    },

    clearUserInfo: (state) => {
      state = [];
    },
  },
});

export const { setUserInfo, clearUserInfo } = userInfoSlice.actions;
export default userInfoSlice.reducer;
