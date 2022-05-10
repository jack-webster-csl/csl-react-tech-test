import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {Post} from "../models/api";

export interface DataState {
  posts: Post[];
}

const initialState: DataState = {
  posts: []
};

const data = createSlice({
  name: "data",
  initialState: initialState,
  reducers: {
    setPosts: (
      state: DataState,
      action: PayloadAction<Post[]>
    ) => {
      state.posts = action.payload;
    }
  },
});

export const { setPosts } = data.actions;

export default data.reducer;
