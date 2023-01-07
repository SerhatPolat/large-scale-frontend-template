import { configureStore } from "@reduxjs/toolkit";
import exampleReducer from "./slices/ExampleSlice";

export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
