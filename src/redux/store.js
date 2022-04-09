import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { phonebookApi } from "./phonebookSlice";
import { filter } from "./reducers";

export const store = configureStore({
  reducer: {
    filter,
    [phonebookApi.reducerPath]: phonebookApi.reducer,
  },
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    phonebookApi.middleware,
  ],
  devTools: process.env.NODE_ENV === "development",
});

setupListeners(store.dispatch);
