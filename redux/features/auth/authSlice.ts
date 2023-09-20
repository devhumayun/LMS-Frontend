import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: "",
  user: "",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    userRegistration: (state, action) => {
      state.token = action.payload.token;
    },
    userLogin: (state, action) => {
      (state.token = action.payload.accessToken),
        (state.user = action.payload.user);
    },
    userLogOut: (state) => {
      state.token = "",
      state.user = "";
    },
  },
});

export const { userRegistration, userLogOut, userLogin } = authSlice.actions;

export default authSlice.reducer;
