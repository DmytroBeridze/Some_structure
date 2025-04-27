import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/store/reduxHooks";
import { TodoItem } from "../model/types";
import { selectError, selectStatus, selectTodo } from "../store/todosSelectors";
import { Status } from "../../../shared/model/types";

type UseTodo = {
  todos: TodoItem[];
  status: Status;
  error: string | "";
};

export const useTodo = (): UseTodo => {
  //   const dispatch = useAppDispatch();
  const todos = useAppSelector(selectTodo);
  const status = useAppSelector(selectStatus);
  const error = useAppSelector(selectError);

  return { todos, status, error };
};
