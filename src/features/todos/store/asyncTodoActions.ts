import { createAsyncThunk } from "@reduxjs/toolkit";
import { TodoItem } from "../model/types";

export const fetchTodos = createAsyncThunk(
  "todos/fetchTodos",

  async () => {
    const response = await fetch(
      `https://jsonplaceholder.typicode.com/todos?_limit=20`
    );
    return (await response.json()) as TodoItem[];
  }
);
