import { createReducer } from "@reduxjs/toolkit";
import { handleFilter } from "./actions";

export const filter = createReducer("", {
  [handleFilter]: (_, { payload }) => payload,
});
