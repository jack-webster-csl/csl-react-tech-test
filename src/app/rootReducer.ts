import { api } from "./services/api";
import { combineReducers } from "@reduxjs/toolkit";
import dataSlice from "../store/dataSlice";

const rootReducer = combineReducers({
  data: dataSlice,

  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
