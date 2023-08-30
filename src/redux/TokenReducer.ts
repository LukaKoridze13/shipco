import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie"; // Import the necessary library for handling cookies
import type { PayloadAction } from "@reduxjs/toolkit";

const cookies = new Cookies(); // Create an instance of the Cookies class

interface TokenSlice {
  value: string | null;
}

const initialState: TokenSlice = {
  value: cookies.get("token") || null, // Initialize token from cookies if available
};

export const tokenSlice = createSlice({
  name: "token",
  initialState,
  reducers: {
    remove: (state) => {
      state.value = null;
      cookies.remove("token");
    },
    set: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
      cookies.set("token", action.payload, { path: "/" });
    },
  },
});

export const { remove, set } = tokenSlice.actions;

export default tokenSlice.reducer;
