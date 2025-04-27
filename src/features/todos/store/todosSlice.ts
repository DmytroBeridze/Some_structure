import { createSlice } from "@reduxjs/toolkit";

import { TodoItem } from "../model/types";
import { fetchTodos } from "./asyncTodoActions";
import { Status } from "../../../shared/model/types";

interface InitialState {
  todos: TodoItem[];
  status: Status;
  error: string | "";
}

const initialState: InitialState = {
  todos: [],
  status: "idle",
  error: "",
};

const usersTodo = createSlice({
  name: "users",
  initialState,
  reducers: {
    toggleCheckbox: (state, action) => {
      state.todos = state.todos.map((elem) => {
        if (elem.id === action.payload) {
          return { ...elem, completed: !elem.completed };
        }
        return elem;
      });
    },
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchTodos.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(fetchTodos.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.todos = action.payload;
      })
      .addCase(fetchTodos.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Some error";
      });
  },
});

export const { actions, reducer } = usersTodo;
export const { toggleCheckbox, addTodo, deleteTodo } = actions;
export default reducer;
