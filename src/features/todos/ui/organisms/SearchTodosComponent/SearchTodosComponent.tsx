import styled from "styled-components";
import { TodosList } from "../../molecules/TodosList";
import Form from "../../molecules/Form/Form";

const SearchTodos = styled.div`
  padding: 20px 0;
`;

export const SearchTodosComponent = () => {
  return (
    <SearchTodos>
      <Form />
      <TodosList />
    </SearchTodos>
  );
};
