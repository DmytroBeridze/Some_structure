import { configureStore } from "@reduxjs/toolkit";
import todoReducers from "../../features/todos/store/todosSlice";
import postReducers from "../../features/posts/store/postSlice";
export const store = configureStore({
  reducer: { todo: todoReducers, post: postReducers },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
