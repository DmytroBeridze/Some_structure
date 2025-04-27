import { RootState } from "../../../app/store";

export const selectTodo = (state: RootState) => state.todo.todos;
export const selectStatus = (state: RootState) => state.todo.status;
export const selectError = (state: RootState) => state.todo.error;
