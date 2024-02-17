import { configureStore } from "@reduxjs/toolkit";

import usersReducer from "./usersSlice";

export const store = configureStore({
  reducer: {
    user: usersReducer,
  },
});

export type StoreState = ReturnType<typeof store.getState>;
export type StoreDispatch = typeof store.dispatch;
