import { api } from "./services/api";
import { combineReducers } from "@reduxjs/toolkit";
import weatherSlice from "../store/weatherSlice";

const rootReducer = combineReducers({
  weather: weatherSlice,

  [api.reducerPath]: api.reducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
