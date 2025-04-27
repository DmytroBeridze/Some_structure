import { createAsyncThunk } from "@reduxjs/toolkit";
import { Post } from "../model/types";

export const fetchPosts = createAsyncThunk(
  "post/fetchPosts",

  async (): Promise<Post[]> => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/posts?_limit=20`
    );
    return await response.json();
  }
);
