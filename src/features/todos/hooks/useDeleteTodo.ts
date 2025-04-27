import { useAppDispatch, useAppSelector } from "../../../app/store/reduxHooks";
import { selectTodo } from "../store/todosSelectors";
import { deleteTodo } from "../store/todosSlice";

export const useDeleteTodo = () => {
  const todos = useAppSelector(selectTodo);
  const dispatch = useAppDispatch();

  const deleteElement = (id: number) => {
    const res = todos.filter((elem) => elem.id !== id);
    dispatch(deleteTodo(res));
  };
  return { deleteElement };
};
