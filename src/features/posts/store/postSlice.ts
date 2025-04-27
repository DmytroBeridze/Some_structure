import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Status } from "../../../shared/model/types";
import { Post } from "../model/types";
import { fetchPosts } from "./asyncPostAction";

interface PostsState {
  posts: Post[];
  loading: Status;
  error: string | null;
}

const initialState: PostsState = {
  posts: [],
  loading: "idle",
  error: null,
};

export const postSlice = createSlice({
  name: "post",
  initialState,
  reducers: {
    addPost: (state, action) => {
      state.posts.push(action.payload);
    },
    deletePost: (state, action) => {
      state.posts = action.payload;
    },
  },

  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.loading = "loading";
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.posts = action.payload;
        state.loading = "succeeded";
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = "failed";
        state.error = action.error.message || "Fetch error";
      });
  },
});

export const { actions, reducer } = postSlice;
export const { addPost, deletePost } = actions;
export default reducer;
