import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationSearch } from "../models/api/weather";

export interface WeatherState {
  searchResults: LocationSearch[];
}

const initialState: WeatherState = {
  searchResults: []
};

const weather = createSlice({
  name: "weather",
  initialState: initialState,
  reducers: {
    setSearchResults: (
      state: WeatherState,
      action: PayloadAction<LocationSearch[]>
    ) => {
      state.searchResults = action.payload;
    },
    clearSearchResults: (state: WeatherState) => {
      state.searchResults = [];
    },
  },
});

export const { setSearchResults, clearSearchResults } = weather.actions;

export default weather.reducer;
