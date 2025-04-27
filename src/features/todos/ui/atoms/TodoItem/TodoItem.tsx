import styled from "styled-components";
import { TodoItem } from "../../../model/types";
import { useToggle } from "../../../hooks/useToggle";
import { Icon } from "../../../../../shared/ui/atoms/Icon";
import { useDeleteTodo } from "../../../hooks/useDeleteTodo";

const TodoItemWrapper = styled.div`
  background-color: var(--grey-color);
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Title = styled.h3<{ $completed: boolean }>`
  font-weight: 600;
  margin: 0;
  text-decoration: ${({ $completed }) =>
    $completed ? "line-through" : "none"};
`;

const CheckBox = styled.input``;
type TodoItemProps = {
  data: TodoItem;
};

export const TodoElement = ({ data }: TodoItemProps) => {
  const { deleteElement } = useDeleteTodo();
  const { completed, id, title, userId } = data;
  const { toggle } = useToggle();
  return (
    <TodoItemWrapper>
      <Title $completed={completed}>
        {title[0].toUpperCase() + title.slice(1)}
      </Title>
      <CheckBox
        type="checkbox"
        checked={completed}
        onChange={() => toggle(id)}
      />
      <div style={{ cursor: "pointer" }}>
        <Icon name="delete" size={14} onClick={() => deleteElement(id)} />
      </div>
    </TodoItemWrapper>
  );
};
