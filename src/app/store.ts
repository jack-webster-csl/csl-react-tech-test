import { configureStore } from "@reduxjs/toolkit";
import { createBrowserHistory } from "history";
import rootReducer from "./rootReducer";
import { api } from "./services/api";

export const history = createBrowserHistory();

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(api.middleware),
  devTools: true,
});

export type AppDispatch = typeof store.dispatch;
