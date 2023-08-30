import { createSlice } from "@reduxjs/toolkit";
import { Cookies } from "react-cookie";
import type { PayloadAction } from "@reduxjs/toolkit";
import User from "../types/User";

const cookies = new Cookies();

interface UserSlice {
  value: User | null;
}

const initialState: UserSlice = {
  value: cookies.get("user") || null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    removeUser: (state) => {
      state.value = null;
      cookies.remove("user");
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.value = action.payload;
      cookies.set("user", action.payload, { path: "/" });
    },
  },
});

export const { removeUser, setUser } = userSlice.actions;

export default userSlice.reducer;
