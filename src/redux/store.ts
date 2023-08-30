import { configureStore } from "@reduxjs/toolkit";
import TokenReducer from "./TokenReducer";
import UserReducer from "./UserReducer";

export const store = configureStore({
  reducer: {
    token: TokenReducer,
    user: UserReducer
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
