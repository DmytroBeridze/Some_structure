import { useAppDispatch } from "../../../app/store/reduxHooks";
import { addTodo } from "../store/todosSlice";

export const useAddTodo = () => {
  const dispatch = useAppDispatch();

  const addTodoElement = (title: string) => {
    const TodoItem = {
      userId: 1,
      id: Date.now(),
      title: title,
      completed: false,
    };
    dispatch(addTodo(TodoItem));
  };
  return { addTodoElement };
};
