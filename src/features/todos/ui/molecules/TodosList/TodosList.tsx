import styled from "styled-components";
import { TodoElement } from "../../atoms/TodoItem";
import { useTodo } from "../../../hooks/useTodos";
import { useEffect } from "react";
import { useAppDispatch } from "../../../../../app/store/reduxHooks";
import { fetchTodos } from "../../../store/asyncTodoActions";
import { useAddTodo } from "../../../hooks/useAddTodo";

const TodosListWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2px;
`;

export const TodosList = () => {
  const { error, status, todos } = useTodo();
  const { addTodoElement } = useAddTodo();
  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchTodos());
  }, []);

  if (status === "failed") return <div>{error}</div>;
  if (status === "loading") return <div>Loading...</div>;

  return (
    <TodosListWrapper>
      {todos.map((elem) => (
        <TodoElement key={elem.id} data={elem} />
      ))}
    </TodosListWrapper>
  );
};
